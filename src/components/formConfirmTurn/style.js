import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 40,
    },
    containerDate: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 80
    },

    containerClient: {
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        textAlign: 'center',
        width: '70%',
        paddingVertical: 10,
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
        fontFamily: 'Philosopher-Regular',
        fontSize: 15,
    },
    containerButton: {
        paddingVertical: 10,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Philosopher-Regular'
    },

});

export default styles;
