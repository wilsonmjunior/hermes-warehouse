import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/components/common";
import { theme } from "@/config/theme";

export default function Expedition() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Expedição" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
