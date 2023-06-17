import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { FormConfirmTurn } from "../../components";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'react-native-uuid';
import { addTurn } from "../../store/actions";

const ConfirmTurn = ({ route, navigation }) => {

    const selectedDate = route.params.selectedDate;
    const selectedTime = route.params.selectedTime;
    const dispatch = useDispatch();
    const [cliente, setCliente] = useState('');

    const handleConfirmTurn = (clienteValue) => {
        setCliente(clienteValue);
    };

    const turnOk = () => {
        const turn = {
            fecha: selectedDate,
            hora: selectedTime,
            cliente: cliente,
            color:'#467599'
        }
        dispatch(addTurn(turn));
        navigation.navigate('Turnos');
    }

    return (
        <View style={styles.container}>
            <FormConfirmTurn selectedDate={selectedDate} selectedTime={selectedTime} onConfirmTurn={handleConfirmTurn} />
            <View style={styles.containerButton}>
                <Button title={'Confirmar turno'} onPress={turnOk} />
            </View>
        </View>
    );
}

export default ConfirmTurn;