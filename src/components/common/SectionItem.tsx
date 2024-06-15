import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@/config/theme";

import { Card } from "./Card";

interface SectionItemProps {
  name: string;
  value: string;
  isColumn?: boolean;
}

export function SectionItem({ name, value, isColumn }: SectionItemProps) {
  return (
    <Card isColumn={isColumn}>
      <Text variant="titleSmall" style={styles.name}>
        {name}
      </Text>
      <Text variant="titleSmall" style={styles.value}>
        {value}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  name: {
    color: theme.colors.title[400],
  },
  value: {
    color: theme.colors.title[800],
  },
});
