import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: "#fff",
    },

    dayContainer: {
        width: 30,
        height: 70,
        alignItems: 'center',
    },
    disabledDayContainer: {
        opacity: 0.5,
    },
    dayText: {
        fontSize: 16,
        color: '#000',
    },
    disabledDayText: {
        color: '#999',
    },
    todayText: {
        color: 'green',
        fontWeight: 'bold',
    },
});

export default styles;
