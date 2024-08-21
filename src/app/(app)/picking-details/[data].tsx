import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";

import {
  Header,
  Loading,
  QrCodeButton,
  QrCodeScanner,
} from "@/components/common";
import { PickingDetails } from "@/components/Screens/Picking";
import { theme } from "@/config/theme";
import { Order, getOrderItem } from "@/infra/services/order.service";

type PickingDetailsScreenProps = {
  data: string;
};

export default function PickingDetailsScreen() {
  const [orderData, setOrderData] = useState<Order>();
  const [openOrderItem, setOpenOrderItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPicking, setIsPicking] = useState(true);
  const [scanTitle, setScanTitle] = useState("Escanear Localização");

  const { data } = useLocalSearchParams<PickingDetailsScreenProps>();

  const handleChangeData = (data: string) => {
    const itemFounded = orderData?.itens.find(({ item }) => item);
    if (!itemFounded?.localizacao.includes(data)) {
      setScanTitle("Escanear Localização");
      Toast.show({
        text1: "Item em localização diferente.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOpenOrderItem(true);
      setScanTitle("Escanear Produto");
    }, 500);

    Toast.show({
      text1: "Item localizado com sucesso.",
      type: "success",
    });
  };

  const handleChangeOrderItem = (data: string) => {
    const itemFounded = orderData?.itens.find(({ item }) => item);
    const [_, code] = data.split("-");
    if (code !== String(itemFounded?.codigo)) {
      Toast.show({
        text1: "O item escaneado é diferente.",
        type: "error",
      });
      return;
    }

    setIsPicking(false);

    Toast.show({
      text1: "Item escaneado com sucesso.",
      type: "success",
    });

    setScanTitle("Escanear Localização");
  };

  useEffect(() => {
    async function loadOrder(data: string) {
      try {
        setLoading(true);
        const [company, orderId, item] = data.split("-");

        const response = await getOrderItem({
          item,
          order: `${company}-${orderId}`,
        });

        if (response.data?.error) {
          Toast.show({
            text1: "Erro ao localizar pedido",
            text2: response.data?.error,
            type: "error",
          });
        }
        setOrderData(response.data.pedido);
      } catch (error) {
        console.warn("error: ", error);
        Toast.show({
          text1: "Erro ao buscar detalhes do item.",
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    }

    if (data && data !== "undefined") {
      loadOrder(data);
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Separação" />

      {orderData?.id ? (
        <PickingDetails isPicking={isPicking} data={orderData} />
      ) : null}

      <QrCodeButton scanTitle={scanTitle} onChangeData={handleChangeData} />

      {openOrderItem && (
        <QrCodeScanner
          title={scanTitle}
          onChangeData={handleChangeOrderItem}
          onClose={() => setOpenOrderItem(false)}
        />
      )}

      {loading && <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
