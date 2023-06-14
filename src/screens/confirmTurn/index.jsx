import React, { useState } from "react";
import { View, Button } from 'react-native';
import { styles } from './styles';
import { FormConfirmTurn } from "../../components";


const ConfirmTurn = () => {

    return (
        <View style={styles.container}>
            <FormConfirmTurn />
        </View>
    );
}

export default ConfirmTurn;