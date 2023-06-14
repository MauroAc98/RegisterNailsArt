import React, { useEffect } from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { SCHEDULES } from '../../constants';
import { ScheduleItem } from "../../components";


const Schedules = ({ route }) => {

    const renderItem = ({ item }) => <ScheduleItem item={item} />;
    const keyExtractor = (item) => item.id.toString();

    const fechaSeleccionada = route.params.selectedDate;
  
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={SCHEDULES}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </SafeAreaView>
        </View>
    )
}

export default Schedules;