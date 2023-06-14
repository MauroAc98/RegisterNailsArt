
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './style';
import { useState } from 'react';


const FormConfirmTurn = ({ selectedTime, selectedDate }) => {

    const [cliente, setCliente] = useState('');

    const onChangeCliente = (value) => {
        setCliente(value);
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerDate}>
                <Text style={styles.text}>
                    {selectedDate}
                </Text>
                <Text style={styles.text}>
                    {selectedTime}
                </Text>
            </View>
            <View style={styles.containerClient}>
                <TextInput style={styles.input}
                    value={cliente}
                    onChangeText={onChangeCliente}
                    placeholder="Ingresa nombre completo del cliente" />
            </View>
            <View style={styles.containerButton}>
                <Button title={'Confirmar turno'} onPress={() => null} />
            </View>
        </View>
    );
}

export default FormConfirmTurn;