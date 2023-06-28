import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { FormConfirmTurn, CheckServices } from "../../components";
import { useDispatch } from 'react-redux';
import { addTurn } from "../../store/actions";
import { COLORS } from "../../constants";


const ConfirmTurn = ({ route, navigation }) => {

    const selectedDate = route.params.selectedDate;
    const selectedTime = route.params.selectedTime;
    const dispatch = useDispatch();
    const [cliente, setCliente] = useState('');
    const [services, setServices] = useState([]);

    const handleConfirmClient = (clienteValue) => {
        setCliente(clienteValue);
    };

    const handleConfirmService = (services) => {
        setServices(services);
    };


    const turnOk = () => {
        if (cliente.trim() === '' || services.length === 0) {
            return;
        }
        const turn = {
            fecha: selectedDate,
            hora: selectedTime,
            cliente: cliente,
            services: services
        }
        dispatch(addTurn(turn));
        navigation.navigate('Turnos');
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerConfirm}>
                <FormConfirmTurn selectedDate={selectedDate} selectedTime={selectedTime} onConfirmClient={handleConfirmClient} />
                <CheckServices services={handleConfirmService} />
                <Button title={'Confirmar turno'} onPress={turnOk} color={COLORS.primary} />
            </View>
        </View>
    );
}

export default ConfirmTurn;