import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";

import { Icon } from "@/components/common";
import { theme } from "@/config/theme";

export function QrCodeButton() {
    return (
        <FAB
            icon={() => <Icon name="QrCode" size={24} color={theme.colors.white} />}
            style={[styles.fab, { bottom: 16 }]}
            onPress={() => console.log('Pressed')}
            mode="flat"
        />
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: theme.colors.primary[500],
    },
});
