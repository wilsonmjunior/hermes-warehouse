import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useLocalSearchParams } from "expo-router";

import { Header, Loading, QrCodeButton } from "@/components/common";
import { PickingListDetails } from "@/components/Screens/Picking";
import { theme } from "@/config/theme";
import { Order, getOrder } from "@/infra/services/order.service";

type PickingProps = {
  data: string;
};

export default function Picking() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Order>();
  const [orderId, setOrderId] = useState<string>();

  const { data: params } = useLocalSearchParams<PickingProps>();

  async function loadOrder(data: string) {
    try {
      setLoading(true);

      const response = await getOrder({ order: data });
      if (response.data?.error) {
        Toast.show({
          text1: "Erro ao buscar dados do pedido.",
          type: "error",
          text2: response.data?.error,
        });
        return;
      }
      setData(response.data.pedido);
    } catch (error) {
      Toast.show({
        text1: "Erro ao buscar dados do pedido.",
        type: "error",
        text2: error.erro,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleChangeData = useCallback((data: string) => {
    setData(undefined);
    setOrderId(data.replace(" ", ""));
    loadOrder(data.replace(" ", ""));
  }, []);

  useEffect(() => {
    const order = params ? params.split("-")[0] : orderId;
    if (order) {
      loadOrder(order);
    }
  }, [orderId, params]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Separação" />

      {data ? <PickingListDetails data={data} /> : loading ? <Loading /> : null}

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
