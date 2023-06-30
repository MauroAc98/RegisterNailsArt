import React from "react";

import { View, Text } from "react-native";
import { styles } from "./styles";
import { formatter } from "../../util/functions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../../constants";
import ButtonCustom from "../buttonCustom";

const TurnItem = ({ item: { item }, onSelected, onDetails }) => {

    return (
        <View style={styles.container}>
            <View style={{ ...styles.containerTouchable }}>
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
                                {formatter(item.cliente, 'strReduced', 15)}
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
                        <View style={styles.containerClient}>
                            <Text style={styles.textService}>
                                {formatter(item.services.join(" - "), 'strReduced', 25)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.containerButtom}>
                        <ButtonCustom onPress={() => onDetails(item)} name={'angle-double-right'} color={COLORS.white} background={COLORS.lightPrimary} />
                        <ButtonCustom onPress={() => onSelected(item)} name={'trash'} color={COLORS.white} background={COLORS.lightPrimary} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default TurnItem;