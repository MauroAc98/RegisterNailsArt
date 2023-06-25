import React, { useCallback, useEffect } from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { TurnItem } from "../../components";
import { useSelector } from 'react-redux';

const ListTurns = () => {

    const ListTurns = useSelector((state) => state.turns.data);
    const generateUniqueId = () => {
        const timestamp = Date.now().toString(36); 
        const randomSuffix = Math.random().toString(36).substr(2, 5); 
        return `${timestamp}-${randomSuffix}`;
    }

    const renderItem = ({ item }) => <TurnItem item={item} onSelected={() => null} />;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={ListTurns}
                    renderItem={renderItem}
                    keyExtractor={generateUniqueId}
                />
            </SafeAreaView>
        </View>
    )
}

export default ListTurns;