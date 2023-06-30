import { StyleSheet } from "react-native";

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    containerImage: {
        maxHeight: 330,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 5
    },
    sinImage: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.backgroundList
    },

    containerTurnDetail: {
        height:280,
        justifyContent:"space-evenly"
    },
    text: {
        paddingVertical: 10,
        marginHorizontal: 20,
        textAlign: "center",
        fontFamily: 'Philosopher-Bold',
        fontSize: 20,
        color: COLORS.text
    },
    textCustom: {
        paddingVertical: 10,
        marginHorizontal: 20,
        textAlign: "center",
        fontFamily: 'Philosopher-Bold',
        fontSize: 22,
        color: COLORS.primaryCustom,
    }

});