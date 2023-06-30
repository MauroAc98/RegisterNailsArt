import React, { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { formatter } from '../../util/functions';
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";


const TurnDetails = ({ route }) => {

  const turnDetails = route.params.item;
  const imageTurn = useSelector((state) => state.turns.image);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        {imageTurn ? (
          <Image source={{ uri: imageTurn }} style={styles.image} />
        ) : (
          <View style={styles.sinImage}>
            <Icon name="image" size={30} color={COLORS.primary} />
          </View>
        )}
      </View>
      <View style={styles.containerTurnDetail}>
        <Text style={styles.text}>{formatter(turnDetails.item.fecha, 'normal')}</Text>
        <Text style={styles.text}>{turnDetails.item.hora}</Text>
        <Text style={styles.textCustom}>{turnDetails.item.cliente}</Text>
        <Text style={styles.textCustom}>{turnDetails.item.services.join(" - ")}</Text>
      </View>
    </ScrollView>
  );
};

export default TurnDetails;