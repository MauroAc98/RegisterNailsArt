import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import { styles } from './styles';

import { Checkbox } from 'react-native-paper';

const CheckServices = ({ services }) => {

    const [checkStates, setCheckStates] = useState([
        { checked: false, label: 'Softgel' },
        { checked: false, label: 'Capping' },
        { checked: false, label: 'Semipermanente (Manos)' },
        { checked: false, label: 'Semipermanente (Pies)' },
        { checked: false, label: 'Retirado' },
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