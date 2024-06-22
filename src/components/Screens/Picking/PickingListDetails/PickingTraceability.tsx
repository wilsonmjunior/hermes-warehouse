import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Icon } from "@/components/common";
import { theme } from "@/config/theme";

type PickingTraceabilityProps = {
  amountBalance: string;
  amountPicking: string;
  location: string;
  item: string;
  reference: string;
  onPicking(item: string): void;
};

export function PickingTraceability({
  amountPicking,
  location,
  item,
  amountBalance,
  reference,
  onPicking,
}: PickingTraceabilityProps) {
  const circle =
    amountPicking === "0,00"
      ? {
          style: styles.circleUnchecked,
          color: theme.colors.gray[100],
        }
      : {
          style: styles.circleChecked,
          color: theme.colors.white,
        };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => onPicking(item)}
    >
      <View style={styles.content}>
        <View style={[styles.circle, circle.style]}>
          <Icon name="Check" size={13} color={circle.color} />
        </View>

        <View style={styles.sectionContent}>
          <View style={styles.row}>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Localização
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {location}
              </Text>
            </View>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Quantidade
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {amountBalance}
              </Text>
            </View>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Separado
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {amountPicking}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Text variant="titleSmall" style={styles.title}>
                Produto
              </Text>
              <Text variant="titleSmall" style={styles.value}>
                {reference}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    flex: 1,
    marginLeft: 12,
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
    flex: 1,
    marginRight: 16,
  },
});
