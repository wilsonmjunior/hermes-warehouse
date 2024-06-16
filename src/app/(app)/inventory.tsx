import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { Header } from "@/components/common";
import { theme } from "@/config/theme";

export default function Inventory() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Inventário" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
