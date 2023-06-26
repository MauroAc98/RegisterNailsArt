import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";
import {COLORS} from "../../constants/index"

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete }) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Detalles del Horario</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>El horario seleccionado se eliminará. ¿Quiere confirmar?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.hour}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancelar'
              color={COLORS.primary}
              onPress={onCancel}
            />
            <Button
              title='Eliminar'
              color={COLORS.primary}
              onPress={() => onDelete(selectedEvent.id)}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default CustomModal;