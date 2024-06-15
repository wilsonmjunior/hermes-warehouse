import { StyleSheet, View } from "react-native";

import { theme } from "@/config/theme";

type CardProps = {
  children: React.ReactNode;
  isColumn?: boolean;
};

export function Card({ children, isColumn }: CardProps) {
  const style = !isColumn ? [styles.row, styles.container] : styles.container;
  return <View style={style}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.gray[100],
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
