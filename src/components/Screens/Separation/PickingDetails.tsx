import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Line, Svg } from "react-native-svg";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

import {
  SectionItem,
  ProductCode,
  PickingTraceability,
  Button,
} from "@/components/common";
import { theme } from "@/config/theme";
import { Order, getFullOrder } from "@/infra/services/order.service";

export function PickingDetails({ data }: { data: Order }) {
  const parentHeight = useMemo(
    () => data.itens.length * 60,
    [data.itens.length],
  );

  const item = useMemo(() => data.itens[0], [data.itens]);

  const handlePicking = async () => {
    try {
      const order = data.id.split("-")[0];
      const response = await getFullOrder({
        orderId: order,
        item: item.item,
        action: "S",
      });
      console.warn("response picking: ", response);
      Toast.show({
        text1: "Produto separado com sucesso.",
        type: "success",
      });

      router.back();
    } catch (error) {
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
          <PickingTraceability
            key={index}
            amount={0}
            location={item.localizacao}
            order={item.codigo}
          />
        ))}

        <View style={styles.buttons}>
          <Button label="Separar" onPress={handlePicking} />
        </View>

        <Svg height={parentHeight} width="1" style={[styles.dashed]}>
          <Line
            x1="0"
            y1="0"
            x2="0"
            y2={parentHeight}
            stroke="#000"
            strokeWidth="1"
            strokeDasharray="4"
          />
        </Svg>
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
  dashed: {
    borderStyle: "dashed",
    borderLeftWidth: 1,
    borderColor: theme.colors.gray[300],
    position: "absolute",
    top: 32,
    left: 28,
  },
});
