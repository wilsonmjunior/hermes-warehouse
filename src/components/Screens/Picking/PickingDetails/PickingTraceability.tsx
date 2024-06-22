import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Icon } from "@/components/common";
import { theme } from "@/config/theme";
import { OrderItem } from "@/infra/services/order.service";

type TraceabilityProps = {
  orderItem: OrderItem;
};

export function PickingTraceability({ orderItem }: TraceabilityProps) {
  const circle =
    orderItem.qtd_sep === "0,00"
      ? {
          style: styles.circleUnchecked,
          color: theme.colors.gray[100],
        }
      : {
          style: styles.circleChecked,
          color: theme.colors.white,
        };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.circle, circle.style]}>
          <Icon name="Check" size={12} color={circle.color} />
        </View>

        <View style={styles.sectionContent}>
          <View style={styles.row}>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Item
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {orderItem.item}
              </Text>
            </View>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Código
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {orderItem.codigo}
              </Text>
            </View>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Saldo
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {orderItem.saldo}
              </Text>
            </View>
          </View>

          <View style={[styles.row, { justifyContent: "flex-start" }]}>
            <View style={{ flexGrow: 1 }}>
              <Text variant="titleSmall" style={styles.title}>
                Separado
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {orderItem.qtd_sep}
              </Text>
            </View>
            <View style={{ flexGrow: 2 }}>
              <Text variant="titleSmall" style={styles.title}>
                Localização
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {orderItem.localizacao}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.gray[100],
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  circleChecked: {
    backgroundColor: theme.colors.success[500],
  },
  circleUnchecked: {
    backgroundColor: theme.colors.gray[200],
  },
  sectionContent: {
    marginLeft: 12,
    flex: 1,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.title[400],
  },
  value: {
    color: theme.colors.title[800],
  },
  section: {
    marginRight: 16,
  },
});
