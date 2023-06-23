import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    input: {
        height: 35,
        marginVertical: 15,
        paddingHorizontal: 10,
        fontSize: 17,
        borderBottomColor: COLORS.disabledBlack,
        borderBottomWidth: 1,
        fontFamily:'Philosopher-Regular',
        textAlign:"center"
    },
    iconButtonContainer: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
    },
}); 