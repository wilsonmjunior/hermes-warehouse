import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { Header, QrCodeButton } from "@/components/common";
import { ExpeditionDetails } from "@/components/Screens/Expedition";
import { theme } from "@/config/theme";

export default function Separation() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Separação" />

            <ExpeditionDetails order={{ customerName: 'João', id: '123', orderDate: '2020-01-01' }} />

            <QrCodeButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
});
