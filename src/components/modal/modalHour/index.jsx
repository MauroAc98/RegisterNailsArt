import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../constants/index"

const ModalHour = ({ isVisible, animationType, selectedEvent, onCancel, onDelete,title,detailMessage }) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>{detailMessage}</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.hour}</Text>
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

export default ModalHour;