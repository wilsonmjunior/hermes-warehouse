import { theme } from "@/config/theme";
import { View, StyleSheet, Pressable, PressableProps } from "react-native";
import { Title, Paragraph } from "react-native-paper";

type OrderDetailsProps = PressableProps & {
  order: {
    id: string;
    customerName: string;
    orderDate: string;
  };
}

export function ExpeditionCard ({ order }: OrderDetailsProps) {
  return (
    <Pressable style={styles.container}>
        <Title>{`Order #${order.id}`}</Title>
        <View>
            <Paragraph>Customer: {order.customerName}</Paragraph>
            <Paragraph>Order Date: {order.orderDate}</Paragraph>
        </View>
    </Pressable>
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
