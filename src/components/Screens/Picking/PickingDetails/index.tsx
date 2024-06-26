import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

import { SectionItem, ProductCode, Button } from "@/components/common";
import { theme } from "@/config/theme";
import { Order, pickingOrderItem } from "@/infra/services/order.service";
import { PickingTraceability } from "./PickingTraceability";

type PickingDetailsProps = { data: Order; isPicking: boolean };

export function PickingDetails({ data, isPicking }: PickingDetailsProps) {
  const item = useMemo(() => data.itens[0], [data.itens]);

  const action = useMemo(() => (item.qtd_sep === "0,00" ? "S" : "X"), [item]);

  const handlePicking = async () => {
    try {
      const orderId = data.id.replace(" ", "");
      const response = await pickingOrderItem({
        order: orderId,
        item: item.item,
        action,
      });

      Toast.show({
        text1: `Produto ${action === "S" ? "separado" : "cancelado"} com sucesso.`,
        type: "success",
      });

      router.push(`picking/${orderId}`);
    } catch (error) {
      console.log("picking error::", error);
      Toast.show({
        text1: "Erro ao separar produto.",
        text2: error,
        type: "error",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <Text style={styles.productTitle}>{data.cliente}</Text>
      </View>

      <ProductCode code={`#${data.id}`} />

      <SectionItem name="Produto" value={item.referencia} isColumn />

      <View style={styles.traceability}>
        {data.itens.map((item, index) => (
          <PickingTraceability key={index} orderItem={item} />
        ))}

        <View style={styles.buttons}>
          <Button
            label={action === "S" ? "Separar" : "Cancelar"}
            onPress={handlePicking}
            disabled={isPicking}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  product: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.gray[100],
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.title[800],
  },
  traceability: {
    marginTop: 16,
  },
  buttons: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
});
