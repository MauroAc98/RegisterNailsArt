import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Config = () => {
    const data = [
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
        { id: '4', text: 'Item 4' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.containerTouchable}>

            <Text style={styles.text}>{item.text}</Text>

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Config;
