import { Button, StyleSheet, Text, View } from 'react-native';

export interface OverlayBoxProps {
    scannedData: string;
    onScanAgain: () => void;
}

export default function OverlayBox({
    scannedData,
    onScanAgain,
}: OverlayBoxProps) {
    return (
        <View style={styles.overlayContainer}>
            <View style={styles.overlayBox}>
                <Text style={styles.overlayText}>Barcode: {scannedData}</Text>
                <View style={styles.overlayButton}>
                    <Button title="Scan again" onPress={onScanAgain} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        bottom: 48,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    overlayBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    overlayText: {
        fontSize: 22,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
    },
    overlayButton: {
        alignSelf: 'center',
        borderRadius: 6,
    },
});
