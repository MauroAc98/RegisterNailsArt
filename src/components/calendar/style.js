import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff",
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
        color: '#000',
    },
    disabledDayText: {
        color: '#999',
    },
    todayText: {
        color: '#467599',
        fontWeight: 'bold',
        backgroundColor: "#A6ECE0",
        borderRadius:50,
        paddingHorizontal:5,
        paddingVertical:5,
        marginTop:-5
    },
});

export default styles;
