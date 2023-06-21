import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { FormConfirmTurn } from "../../components";
import { useDispatch } from 'react-redux';
import { addTurn } from "../../store/actions";
import { COLORS } from "../../constants";

const ConfirmTurn = ({ route, navigation }) => {

    const selectedDate = route.params.selectedDate;
    const selectedTime = route.params.selectedTime;
    const dispatch = useDispatch();
    const [cliente, setCliente] = useState('');

    const handleConfirmTurn = (clienteValue) => {
        setCliente(clienteValue);
    };

    const turnOk = () => {

        if (cliente.trim() === '') {
            return;
        }
        const turn = {
            fecha: selectedDate,
            hora: selectedTime,
            cliente: cliente,
            color: COLORS.backgroundList
        }
        dispatch(addTurn(turn));
        navigation.navigate('Turnos');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerConfirm}>
                <FormConfirmTurn selectedDate={selectedDate} selectedTime={selectedTime} onConfirmTurn={handleConfirmTurn} />
                <Button title={'Confirmar turno'} onPress={turnOk} color={COLORS.primary} />
            </View>
        </View>
    );
}

export default ConfirmTurn;