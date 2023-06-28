import React, {useState } from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import {TurnItem } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTurn } from "../../store/actions";
import { ModalTurn } from "../../components/modal";


const ListTurns = () => {
    const turnsData = useSelector((state) => state.turns.data);
    const keyExtractor = (item) => item.id.toString();
    const renderItem = ({ item }) => <TurnItem item={item} onSelected={() => onHandlerEvent(item.id)} />;
    const dispatch = useDispatch();


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const onHandlerEvent = (id) => {
        setModalVisible(!modalVisible);
        const selectedEvent = turnsData.find((item) => item.id === id);
        setSelectedEvent(selectedEvent);
    }

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedEvent(null);
    }


    const onHandlerDeleteEvent = (id) => {
        dispatch(deleteTurn(id));
        setModalVisible(false);
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={turnsData}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
                <ModalTurn
                    isVisible={modalVisible}
                    animationType='fade'
                    onCancel={onHandlerCancelModal}
                    onDelete={onHandlerDeleteEvent}
                    selectedEvent={selectedEvent}
                    title={"Detalles del turno"}
                    detailMessage={"El turno seleccionado se eliminará. ¿Quiere confirmar?"}
                />
            </SafeAreaView>
        </View>
    );
};

export default ListTurns;
