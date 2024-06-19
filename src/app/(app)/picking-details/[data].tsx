import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";

import { Header, Loading, QrCodeButton } from "@/components/common";
import { PickingDetails } from "@/components/Screens/Separation";
import { theme } from "@/config/theme";
import { Order, getOrder } from "@/infra/services/order.service";

type PickingDetailsScreenProps = {
  data: string;
};

export default function PickingDetailsScreen() {
  const [orderData, setOrderData] = useState<Order>();
  const [loading, setLoading] = useState(false);
  const [isPicking, setIsPicking] = useState(true);

  const { data } = useLocalSearchParams<PickingDetailsScreenProps>();

  const handleChangeData = (data: string) => {
    const location = data;
    const itemFounded = orderData?.itens.find(({ item }) => item);
    if (location !== itemFounded?.localizacao) {
      Toast.show({
        text1: "Item em localização diferente.",
        type: "error",
      });
      return;
    }

    setIsPicking(false);

    Toast.show({
      text1: "Item localizado com sucesso.",
      type: "success",
    });
  };

  useEffect(() => {
    async function loadOrder(data: string) {
      try {
        setLoading(true);
        const [company, order, item] = data.split("-");
        const response = await getOrder({ company, orderId: order, item });
        if (response.data?.error) {
          Toast.show({
            text1: "Erro ao localizar pedido",
            text2: response.data?.error,
            type: "error",
          });
        }
        setOrderData(response.data.pedido);
      } catch (error) {
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
      ) : loading ? (
        <Loading />
      ) : null}

      <QrCodeButton onChangeData={handleChangeData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
