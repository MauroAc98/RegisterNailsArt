import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },

    dayContainer: {
        width: 30,
        height:60,
        alignItems: 'center',
    },
    disabledDayContainer: {
        opacity: 0.5,
    },
    dayText: {
        fontSize: 16,
        color: COLORS.black,
    },
    disabledDayText: {
        color: COLORS.disabledBlack,
    },
    todayText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        backgroundColor: "#A6ECE0",
        borderRadius:50,
        paddingHorizontal:5,
        paddingVertical:5,
        marginTop:-5
    },
});

export default styles;
