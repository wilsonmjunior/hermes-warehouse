import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { Camera } from "expo-camera";

import {
  CameraPermissionDenied,
  Icon,
  Loading,
  QrCodeScanner,
} from "@/components/common";
import { theme } from "@/config/theme";

type QrCodeButtonProps = {
  onChangeData(data: string): void;
};

export function QrCodeButton({ onChangeData }: QrCodeButtonProps) {
  const [open, setOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleOpenScan = () => {
    setOpen(!open);
  };

  if (hasPermission === null) {
    return <Loading />;
  }

  if (hasPermission === false) {
    return (
      <CameraPermissionDenied message="Permissão de câmera não concedida. Por favor, permita o acesso à câmera nas configurações do seu dispositivo." />
    );
  }

  return (
    <>
      <FAB
        icon={() => <Icon name="QrCode" size={24} color={theme.colors.white} />}
        style={[styles.fab, { bottom: 16 }]}
        onPress={handleOpenScan}
        mode="flat"
      />

      {open && (
        <QrCodeScanner
          onChangeData={onChangeData}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    backgroundColor: theme.colors.primary[500],
  },
});
