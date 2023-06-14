import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { FormConfirmTurn } from "../../components";


const ConfirmTurn = ({route}) => {

    const selectedDate = route.params.selectedDate;
    const selectedTime = route.params.selectedTime;

    return (
        <View style={styles.container}>
            <FormConfirmTurn selectedDate={selectedDate} selectedTime={selectedTime} />
        </View>
    );
}

export default ConfirmTurn;