import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({

    title: {
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
        fontFamily:'Philosopher-Bold'
    },
    inputContainer: {
        paddingVertical: 25,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    addContent: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 25,
        minWidth: 300,
        maxWidth: "80%",
    },
    input: {
        paddingVertical: 10,
        borderBottomColor: COLORS.disabledBlack,
        borderBottomWidth: 0.5,
        fontSize: 14,
    }
});