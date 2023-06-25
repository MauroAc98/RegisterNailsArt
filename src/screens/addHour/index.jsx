import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants";
import TimePicker from "../../components/timePicker";
import { useDispatch } from "react-redux";
import { addHour, getHours } from "../../store/actions";

const AddHour = ({ navigation }) => {

    const [selectedHour, setSelectedHour] = useState('');

    const dispatch = useDispatch();

    const onHandlerCancel = () => {

        navigation.navigate('Setup');
    }

    const onHandlerConfirm = () => {
        dispatch(addHour(selectedHour));
        dispatch(getHours());
        navigation.navigate('Setup');
    }

    const Hour = (hour) => {
        setSelectedHour(hour)
    }

    return (
        <View style={styles.container}>
            <View style={styles.addContent}>
                <Text style={styles.title}>Nuevo horario de atención</Text>
                <View style={styles.inputContainer}>
                    <TimePicker onConfirmHour={Hour} />
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