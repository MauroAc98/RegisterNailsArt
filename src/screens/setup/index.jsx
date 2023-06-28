import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getHours, deleteHr } from '../../store/actions';
import { compareHours } from '../../util/functions';
import { ModalHour } from '../../components/modal';

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

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <ModalHour
                isVisible={modalVisible}
                animationType='fade'
                onCancel={onHandlerCancelModal}
                onDelete={onHandlerDeleteEvent}
                selectedEvent={selectedEvent}
                title={"Detalles del Horario"}
                detailMessage={"El horario seleccionado se eliminará. ¿Quiere confirmar?"}
            />
        </View>
    );
};

export default Config;
