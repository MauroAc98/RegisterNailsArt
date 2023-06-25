import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getHours } from '../../store/actions';
import { compareHours } from '../../util/functions';

const Config = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.hours.data);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.containerTouchable}>
            <Text style={styles.text}>{item.hour}</Text>
        </TouchableOpacity>
    );

    data.sort(compareHours);


    useEffect(() => {
        dispatch(getHours());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Config;
