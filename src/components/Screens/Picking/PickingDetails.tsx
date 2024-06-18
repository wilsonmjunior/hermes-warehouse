import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

import { SectionItem, ProductCode } from "@/components/common";
import { theme } from "@/config/theme";
import { Order } from "@/infra/services/order.service";
import { toCamelCaseWithFirstUpper } from "@/utils/camel-case";

import { PickingTraceability } from "./PickingTraceability";

export function PickingDetails({ data }: { data: Order }) {
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
          <PickingTraceability
            key={index}
            amountBalance={item.saldo}
            amountPicking={item.qtd_sep}
            location={item.localizacao}
            item={item.item}
            reference={toCamelCaseWithFirstUpper(item.referencia)}
            onPicking={handlePicking}
          />
        ))}
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
});
