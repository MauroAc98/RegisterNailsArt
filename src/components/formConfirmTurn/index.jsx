
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
import { useEffect, useState, useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { formatter } from '../../util/functions';



const FormConfirmTurn = ({ selectedTime, selectedDate, onConfirmClient }) => {

    const [cliente, setCliente] = useState('');


    const onChangeCliente = useCallback((value) => {
        setCliente(value);
    }, []);

    useEffect(() => {
        onConfirmClient(cliente);
    }, [cliente])

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.containerDate}>
                    <Text style={styles.text}>
                        {formatter(selectedDate, 'normal')}
                    </Text>
                    <Text style={styles.text}>
                        {selectedTime}
                    </Text>
                </View>
                <View style={styles.containerClient}>

                    <TextInput style={styles.input}
                        value={cliente}
                        onChangeText={onChangeCliente}
                        placeholder="Para quién será el turno? Indicar Aquí.."
                    />
                    <KeyboardAwareScrollView />

                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default FormConfirmTurn;