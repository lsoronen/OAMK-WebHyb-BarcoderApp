import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CameraType, useCameraPermissions, type BarcodeScanningResult } from 'expo-camera';

import BarcodeCamera from './components/BarcodeCamera'
import OverlayBox from './components/OverlayBox';

export default function App() {
  const [facing, setFacing]  = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanningPaused, setIsScanningPaused] = useState<boolean>(false);

  if (!permission) {
    // Camera permissions are still loading.
    return (
      <View>
        <Text>Wating permission for camera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: BarcodeScanningResult): void => {
    //console.log('data', data);
    setScannedData(data);
    setIsScanningPaused(true);
  };

  const handleScanAgain = (): void => {
    setScannedData(null);
    setIsScanningPaused(false);
  };

  return (
    <View style={styles.container}>
      <BarcodeCamera
        facing={facing}
        onBarcodeScanned={isScanningPaused ? undefined : handleBarCodeScanned}
      />

      {scannedData && (
        <OverlayBox
          scannedData={scannedData}
          onScanAgain={handleScanAgain}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
});
