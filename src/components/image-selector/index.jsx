import { View, Button, Text, Image, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../constants';
import Icon from "react-native-vector-icons/FontAwesome";
import { requestCameraPermissionsAsync, launchCameraAsync ,requestMediaLibraryPermissionsAsync} from "expo-image-picker";

export const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState(null);

    const verifyPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                "Permiso denegado", "Necesitamos permisos para usar la camara", [{ text: 'OK' }]
            )
            return false;
        }
        return true;
    }

    const onHandleTakeImage = async () => {
        const isCameraPermission = await verifyPermissions();
        if (!isCameraPermission) return;
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quantity: 0.7
        });
        setPickedUrl(image.uri);
        onImage(image.uri)
    };

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                   <Icon name="image" size={30} />
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )}
            </View>
            <Button title="Tomar Foto" color={COLORS.primary} onPress={onHandleTakeImage} />
        </View>
    )
}
export default ImageSelector;