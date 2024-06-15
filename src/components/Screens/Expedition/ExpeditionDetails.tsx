import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Line, Svg } from "react-native-svg";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

import { SectionItem, ProductCode } from "@/components/common";
import { theme } from "@/config/theme";
import { Order } from "@/infra/services/order.service";
import { toCamelCaseWithFirstUpper } from "@/utils/camel-case";

import { ExpeditionTraceability } from "./ExpeditionTraceability";

export function ExpeditionDetails({ data }: { data: Order }) {
  const parentHeight = useMemo(
    () => data.itens.length * 96,
    [data.itens.length],
  );

  const handlePicking = (item: string) => {
    const order = data.id.replace(" ", "");
    router.push(`picking-details/${order}-${item}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.product}>
        <Text style={styles.productTitle}>{data.cliente}</Text>
      </View>

      <>
        <ProductCode code={`#${data.id}`} />
        <SectionItem
          name="Endereço de entrega"
          value={toCamelCaseWithFirstUpper(data?.entrega_endereco)}
        />
        <SectionItem name="Bairro" value={data?.entrega_bairro} />
        <SectionItem name="Cidade" value={data.entrega_cidade} />
      </>

      <View style={styles.traceability}>
        {data.itens.map((item, index) => (
          <ExpeditionTraceability
            key={index}
            amount={item.qtd_sep}
            location={item.localizacao}
            item={item.item}
            order={item.codigo}
            reference={toCamelCaseWithFirstUpper(item.referencia)}
            onPicking={handlePicking}
          />
        ))}

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 64,
  },
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
  dashed: {
    borderStyle: "dashed",
    borderLeftWidth: 1,
    borderColor: theme.colors.gray[300],
    position: "absolute",
    top: 64,
    left: 28,
  },
});
