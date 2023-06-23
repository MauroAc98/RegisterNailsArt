import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants";
import TimePicker from "../../components/timePicker";

const AddHour = ({ navigation }) => {

    const onHandlerCancel = () => {
        navigation.navigate('Setup');
    }

    const onHandlerConfirm = () => {
        navigation.navigate('Setup');
    }

    return (
        <View style={styles.container}>
            <View style={styles.addContent}>
                <Text style={styles.title}>Nuevo horario de atención</Text>
                <View style={styles.inputContainer}>
                    <TimePicker />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Confirmar'
                        color={COLORS.primary}
                        onPress={onHandlerConfirm}
                    />
                    <Button
                        title='Cancelar'
                        color={COLORS.primary}
                        onPress={onHandlerCancel}
                    />
                </View>
            </View>
        </View>
    )
};

export default AddHour;