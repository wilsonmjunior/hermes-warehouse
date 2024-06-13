import { theme } from "@/config/theme";
import { View, StyleSheet, PressableProps } from "react-native";

type OrderDetailsProps = {
  order: {
    id: string;
    customerName: string;
    orderDate: string;
  };
}

export function ExpeditionDetails ({ order }: OrderDetailsProps) {
  return (
    <View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    borderWidth: 0.2,
    borderColor: theme.colors.outline,
  },
});
