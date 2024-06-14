import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { Header, QrCodeButton } from "@/components/common";
import { PickingDetails } from "@/components/Screens/Separation";
import { theme } from "@/config/theme";

export default function Separation() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Separação" />

            <PickingDetails />

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
