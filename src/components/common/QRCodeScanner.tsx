import { CameraView } from "expo-camera";
import { useState } from "react";
import { StyleSheet } from "react-native";

type BarCodeScannedProps = {
  type: string;
  data: string;
};

export function QRCodeScanner() {
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");

  const handleBarCodeScanned = ({ type, data }: BarCodeScannedProps) => {
    setScanned(true);
    setData(data);
    alert(`QR Code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      />
    </>
  );
}
