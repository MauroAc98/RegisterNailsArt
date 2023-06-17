import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const TurnItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.containerTouchable, backgroundColor: item.color }} onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.name}>
                        {item.fecha}
                    </Text>
                    <Text style={styles.name}>
                        {item.hora}
                    </Text>
                    <Text style={styles.name}>
                        {item.cliente}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TurnItem;