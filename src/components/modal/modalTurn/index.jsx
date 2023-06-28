import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../constants/index"
import { formatter } from "../../../util/functions";


const ModalTurn = ({ isVisible, animationType, selectedEvent, onCancel, onDelete, title, detailMessage }) => {

  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detailMessage}>{detailMessage}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.selectedEvent}>{selectedEvent?.item.cliente}</Text>
            <Text style={styles.selectedEvent}>{formatter(selectedEvent?.item.fecha,'reduced')}</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.item.hora}</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.item.services.join(" - ")}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Confirmar'
              color={COLORS.primary}
              onPress={() => onDelete(selectedEvent.id)}
            />
            <Button
              title='Cancelar'
              color={COLORS.primary}
              onPress={onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default ModalTurn;