import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { Header, Loading, QrCodeButton } from "@/components/common";
import { PickingDetails } from "@/components/Screens/Picking";
import { theme } from "@/config/theme";
import { Order, getFullOrder } from "@/infra/services/order.service";

export default function Picking() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Order>();
  const [orderId, setOrderId] = useState<string>();

  async function loadOrder(orderId: string) {
    try {
      setLoading(true);
      const response = await getFullOrder({ orderId });
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
    if (orderId) {
      loadOrder(orderId);
    }
  }, [orderId]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Separação" />

      {data ? <PickingDetails data={data} /> : loading ? <Loading /> : null}

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
