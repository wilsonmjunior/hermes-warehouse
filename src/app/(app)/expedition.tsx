import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { Header, QrCodeButton } from "@/components/common";
import { ExpeditionDetails } from "@/components/Screens/Expedition";
import { theme } from "@/config/theme";

export default function Separation() {
    const handleChangeData = (data: string) => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Expedição" />

            <ExpeditionDetails />

            <QrCodeButton onChangeData={handleChangeData} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
});
