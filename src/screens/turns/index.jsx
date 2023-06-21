import React  from "react";
import { View } from 'react-native';
import { styles } from './styles';
import { Calendario } from '../../components'

const Turns = () => {

    return (
        <View style={styles.container}>
            <Calendario />
        </View>
    );
}

export default Turns;