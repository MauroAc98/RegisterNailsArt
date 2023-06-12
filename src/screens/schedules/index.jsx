import React from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { SCHEDULES } from '../../constants';
import { ScheduleItem } from "../../components";


const Schedules = () => {

    const renderItem = ({ item }) => <ScheduleItem item={item} />;
    const keyExtractor = (item) => item.id.toString();

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