import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center"
    },
    inputContainer: {
        paddingVertical: 25,
    },
    detailMessage: {
        fontSize: 14,
        color: COLORS.text,
    },
    selectedEvent: {
        fontSize: 14,
        color: COLORS.text,
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
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
    input:{
        paddingVertical: 10,
        borderBottomColor: COLORS.disabledBlack,
        borderBottomWidth: 0.5,
        fontSize: 15,
    }
});