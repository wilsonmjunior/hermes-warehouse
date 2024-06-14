import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FAB, Text } from "react-native-paper";
import { Camera } from "expo-camera";

import { Icon, QrCodeScanner } from "@/components/common";
import { theme } from "@/config/theme";

type QrCodeButtonProps = {
    onChangeData(data: string): void;
}

export function QrCodeButton({ onChangeData }: QrCodeButtonProps) {
    const [open, setOpen] = useState(false);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleScan = () => {
        setOpen(!open);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            <FAB
                icon={() => <Icon name="QrCode" size={24} color={theme.colors.white} />}
                style={[styles.fab, { bottom: 16 }]}
                onPress={handleScan}
                mode="flat"
            />

            { open &&
                <QrCodeScanner onChangeData={onChangeData} />
            }
        </>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        backgroundColor: theme.colors.primary[500],
    },
});
