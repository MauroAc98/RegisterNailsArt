import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { formatter } from "../../util/functions";
import Icon from 'react-native-vector-icons/FontAwesome';

const TurnItem = ({ item: { item }, onSelected }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ ...styles.containerTouchable, backgroundColor: item.color }} onPress={() => onSelected(item)}>
                <View style={styles.containerData}>
                    <View style={styles.containerTop}>
                        <View style={styles.containerGroup}>
                            <Icon name={'calendar'} size={20} color="black" />
                            <Text style={styles.text}>
                                {formatter(item.fecha, 'reduced')}
                            </Text>
                        </View>
                        <View style={styles.containerClient}>
                            <Icon name={'user-circle'} size={20} color="black" />
                            <Text style={styles.textClient}>
                                {formatter(item.cliente, 'strReduced')}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerBottom}>
                        <View style={styles.containerGroup}>
                            <Icon name={'clock-o'} size={20} color="black" />
                            <Text style={styles.text}>
                                {item.hora}
                            </Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TurnItem;