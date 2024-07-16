import { useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as QuickActions from "expo-quick-actions";

import Audit from "@/assets/audit.svg";
import Inventory from "@/assets/inventory.svg";
import Picking from "@/assets/picking.svg";
import Shipping from "@/assets/shipping.svg";

import { Header, ServiceCard } from "@/components/Screens/Home";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    QuickActions.setItems([
      {
        id: "1",
        title: "Separar",
        subtitle: "Clique para separar o item",
        icon: Platform.OS === "ios" ? "symbol:qrcode" : "qrcode",
        params: {
          href: "/picking/null",
        },
      },
    ]);
  }, []);

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
