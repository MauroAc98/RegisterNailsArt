import React, { useState } from "react";
import { View, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { TurnItem } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTurn, getImage } from "../../store/actions";
import { ModalTurn } from "../../components/modal";


const ListTurns = ({ navigation }) => {
    const turnsData = useSelector((state) => state.turns.data);
    const keyExtractor = (item) => item.id.toString();
    const renderItem = ({ item }) => <TurnItem item={item} onSelected={() => onHandlerEvent(item.id)} onDetails={() => onHandlerDetails(item)} />;
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const onHandlerDetails = async (item) => {
        dispatch(getImage(item.id)).then(() => {
            navigation.navigate('Detalle', { item: item });
        });
    }

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
