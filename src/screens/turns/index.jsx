import React from "react";
import { View, Text,Button } from 'react-native';
import { styles } from './styles';

const Turns = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Turns</Text>
            <Button title={'Go to Schedules'} onPress={() => navigation.navigate("Schedules")}></Button>
        </View>
    )
}

export default Turns;