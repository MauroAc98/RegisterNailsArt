import { StyleSheet } from "react-native";

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingVertical:5,
        paddingHorizontal:5
    },
    containerImage: {
        maxHeight: 220,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius:5
    },
    sinImage:{
        height: "100%",
        width: "100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.backgroundList
    },
 
    containerTurnDetail: {
        paddingVertical: 10
    },
    text: {
        paddingVertical: 15,
        marginHorizontal: 20,
        textAlign:"center",
        fontFamily:'Philosopher-Regular',
        fontSize:19,
        color:COLORS.text
    }

});