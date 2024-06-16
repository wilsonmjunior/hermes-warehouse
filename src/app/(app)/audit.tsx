import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { Header } from "@/components/common";
import { theme } from "@/config/theme";

export default function Audit() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Auditoria" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
