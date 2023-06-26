import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants";


const ScheduleItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.containerTouchable, backgroundColor: COLORS.backgroundList }} onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.name}>
                        {item.hour}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ScheduleItem;