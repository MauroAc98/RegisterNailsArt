import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';

import { Checkbox } from 'react-native-paper';

const CheckServices = ({ services }) => {

    const [checkStates, setCheckStates] = useState([
        { checked: false, label: 'SOFTGEL' },
        { checked: false, label: 'CAPPING' },
        { checked: false, label: 'SEMIPERMANENTE (Manos)' },
        { checked: false, label: 'SEMIPERMANENTE (Pies)' },
        { checked: false, label: 'RETIRADO' },
    ]);


    useEffect(() => {
        const labels = checkStates.filter(check => check.checked).map(check => check.label);
        services(labels)
    }, [checkStates]);

    const handleCheck = (index) => {
        setCheckStates((prevState) => {
            const updatedCheckStates = [...prevState];
            updatedCheckStates[index].checked = !updatedCheckStates[index].checked;
            return updatedCheckStates;
        });
    };

    return (
        <View style={styles.container}>
            {checkStates.map((check, index) => (
                <Checkbox.Item
                    key={index}
                    label={check.label}
                    status={check.checked ? 'checked' : 'unchecked'}
                    onPress={() => handleCheck(index)}
                    labelStyle={styles.font}
                    color={check.checked ? styles.colorCheck.color : undefined}
                />
            ))}
        </View>
    );
}

export default CheckServices;