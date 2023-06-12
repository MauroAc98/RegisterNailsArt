import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const ScheduleItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.containerTouchable, backgroundColor: item.color }}>
                <View>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ScheduleItem;