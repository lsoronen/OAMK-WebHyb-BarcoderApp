import { CameraView, CameraType, BarcodeScanningResult } from 'expo-camera';
import { StyleSheet } from 'react-native';

export interface BarcodeCameraProps {
    facing: CameraType;
    onBarcodeScanned?: (result: BarcodeScanningResult) => void;
}

export default function BarcodeCamera({ facing, onBarcodeScanned, }: BarcodeCameraProps) {
    return (
        <CameraView
            style={styles.camera}
            facing={facing}
            onBarcodeScanned={onBarcodeScanned}
            barcodeScannerSettings={{
                barcodeTypes: ['ean13', 'ean8'],
            }}
        />
    );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
    },
});
