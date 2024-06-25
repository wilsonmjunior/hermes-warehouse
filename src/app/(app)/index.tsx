import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Audit from "@/assets/audit.svg";
import Inventory from "@/assets/inventory.svg";
import Picking from "@/assets/picking.svg";
import Shipping from "@/assets/shipping.svg";

import { Header, ServiceCard } from "@/components/Screens/Home";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header />

      <View style={styles.servicesContent}>
        <View style={styles.servicesRow}>
          <ServiceCard
            icon={Picking}
            title="Separação"
            onPress={() => {
              router.navigate("picking/null");
            }}
          />
          <ServiceCard
            icon={Shipping}
            title="Expedição"
            onPress={() => {
              router.navigate("expedition");
            }}
          />
        </View>
        <View style={styles.servicesRow}>
          <ServiceCard
            icon={Inventory}
            title="Inventário"
            onPress={() => {
              router.navigate("inventory");
            }}
          />
          <ServiceCard
            icon={Audit}
            title="Auditoria"
            onPress={() => {
              router.navigate("audit");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesContent: {
    marginTop: 24,
    gap: 16,
    marginHorizontal: 20,
  },
  servicesRow: {
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
