import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView } from "expo-camera";
import { useState } from "react";

import QrCode from "@/assets/qr.svg";

import { theme } from "@/config/theme";

import { Header } from "../Header";

type BarCodeScannedParams = {
  type: string;
  data: string;
};

type QrCodeScannerProps = {
  title?: string;
  onChangeData(value: string): void;
  onClose(): void;
};

export function QrCodeScanner({
  title = "Escanear QR Code",
  onChangeData,
  onClose,
}: QrCodeScannerProps) {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannedParams) => {
    setScanned(true);
    onChangeData(data);
    onClose();
  };

  return (
    <SafeAreaView style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Header
        title={title}
        textColor={theme.colors.white}
        style={styles.header}
        onPress={onClose}
      />

      <View style={[styles.scannerContainer]}>
        <View style={styles.cameraContainer}>
          <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
          >
            <QrCode width={300} height={300} />
          </CameraView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary[600],
  },
  header: {
    backgroundColor: theme.colors.primary[600],
    borderBottomWidth: 0,
  },
  scannerContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary[600],
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
  },
});
