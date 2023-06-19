import { StyleSheet } from "react-native";
import {COLORS} from '../../constants'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    title:{
        fontFamily:'Philosopher-BoldItalic',
    },
    notSchedules:{
        backgroundColor: COLORS.background,
        flex:1,
        textAlign:"center",
        paddingVertical:60,
        fontSize:20,
        fontFamily:'Philosopher-Regular',
    }

});