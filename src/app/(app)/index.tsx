import { useState } from "react";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Audit from '@/assets/audit.svg';
import Inventory from '@/assets/inventory.svg';
import Picking from '@/assets/picking.svg';
import Shipping from '@/assets/shipping.svg';

import { Header, ServiceCard } from "@/components/Screens/Home";

export default function Home() {
    const router = useRouter();

    const [pathname, setPathname] = useState('');

    console.warn('pathname', pathname);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Header />

            <View style={styles.servicesContent}>
                <View style={styles.servicesRow}>
                    <ServiceCard
                        icon={Picking}
                        title="Separação"
                        selected={pathname === 'separation'}
                        onPress={() => {
                            setPathname('separation');
                            router.navigate('separation')
                        }}
                    />
                    <ServiceCard
                        icon={Shipping}
                        title="Expedição"
                        selected={pathname === 'expedition'}
                        onPress={() => {
                            setPathname('expedition');
                            router.navigate('expedition')
                        }}
                    />
                </View>
                <View style={styles.servicesRow}>
                    <ServiceCard
                        icon={Inventory}
                        title="Inventário"
                        selected={pathname === 'inventory'}
                        onPress={() => {
                            setPathname('inventory');
                            router.navigate('inventory')
                        }}
                    />
                    <ServiceCard
                        icon={Audit}
                        title="Auditoria"
                        selected={pathname === 'audit'}
                        onPress={() => {
                            setPathname('audit');
                            router.navigate('audit')
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    servicesContent: {
        marginTop: 24,
        gap: 16,
        marginHorizontal: 20,
    },
    servicesRow: {
        gap: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
