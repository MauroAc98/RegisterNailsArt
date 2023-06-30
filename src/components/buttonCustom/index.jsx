import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";


const ButtonCustom = ({ onPress, name, color, background }) => {
    return (
        <TouchableOpacity style={{ ...styles.iconButtonContainer, backgroundColor: background }} onPress={onPress}>
            <Icon name={name} size={20} color={color} />
        </TouchableOpacity>
    );
};

export default ButtonCustom;