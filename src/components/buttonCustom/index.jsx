import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";


const ButtonCustom = ({ onPress, name }) => {
    return (
        <TouchableOpacity style={styles.iconButtonContainer} onPress={onPress}>
            <Icon name={name} size={20} color="white" />
        </TouchableOpacity>
    );
};

export default ButtonCustom;