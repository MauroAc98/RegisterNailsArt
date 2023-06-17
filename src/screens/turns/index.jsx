import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'
import { useDispatch } from 'react-redux';
import { filterTurn } from '../../store/actions';

const Turns = ({ navigation }) => {

    const [selectedDate, setSelecteDate] = useState('');
    const dispatch = useDispatch();

    const onSelectedDate = (date) => {
        setSelecteDate(date);
    };

    const sendDate = () => {
        if (selectedDate.length === 0) {
            return;
        } else {
            setSelecteDate('');
        }
        dispatch(filterTurn(selectedDate));
        navigation.navigate('Horarios', {
            selectedDate: selectedDate
        });
    }

    return (
        <View style={styles.container}>
            <Calendario onSelectedDate={onSelectedDate} />
            <View style={styles.button}>
                <Button title={'Ir a horarios'} onPress={sendDate}></Button>
            </View>
        </View>
    );
}

export default Turns;