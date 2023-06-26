import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getHours, deleteHr, loadedHours } from '../../store/actions';
import { compareHours } from '../../util/functions';
import { CustomModal } from '../../components/index';

const Config = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.hours.data);
    data.sort(compareHours);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.containerTouchable} onPress={() => onHandlerEvent(item.id)}>
            <Text style={styles.text}>{item.hour}</Text>
        </TouchableOpacity>
    );

    const onHandlerEvent = (id) => {
        setModalVisible(!modalVisible);
        const selectedEvent = data.find(event => event.id === id);
        setSelectedEvent(selectedEvent);
    }

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedEvent(null);
    }

    const onHandlerDeleteEvent = (id) => {
        dispatch(deleteHr(id));
        dispatch(getHours());
        setModalVisible(false);
    }


    // useEffect(() => {
    //     dispatch(getHours());
    // }, [dispatch]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <CustomModal
                isVisible={modalVisible}
                animationType='slide'
                onCancel={onHandlerCancelModal}
                onDelete={onHandlerDeleteEvent}
                selectedEvent={selectedEvent}
            />
        </View>
    );
};

export default Config;
