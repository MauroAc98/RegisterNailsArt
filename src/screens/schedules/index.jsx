import React from "react";
import { View, FlatList, SafeAreaView,Text } from 'react-native';
import { styles } from './styles';
import { ScheduleItem } from "../../components";
import { useSelector } from 'react-redux';


const Schedules = ({ route, navigation }) => {

    const availableSchedules = useSelector((state) => state.turns.availableSchedules);
    const onSelected = ({ name }) => {

        navigation.navigate("Confirmar", {
            selectedDate: selectedDate,
            selectedTime: name
        });
    };

    const renderItem = ({ item }) => <ScheduleItem item={item} onSelected={onSelected} />;
    const keyExtractor = (item) => item.id.toString();

    const selectedDate = route.params.selectedDate;

    return (

        availableSchedules.length === 0 ? <Text style={styles.notSchedules}>No hay más horarios disponibles</Text> :
            (<View style={styles.container}>
                <SafeAreaView>
                    <FlatList
                        data={availableSchedules}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </SafeAreaView>
            </View>)
    )
}

export default Schedules;