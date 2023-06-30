import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        paddingVertical: 10,
    },
    containerDate: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 80
    },

    containerClient: {
        alignItems: 'center',
        marginVertical: 15,
    },
    input: {
        textAlign: 'center',
        width: '90%',
        paddingVertical: 10,
        borderBottomColor: COLORS.disabledBlack,
        borderBottomWidth: 1,
        fontFamily: 'Philosopher-Bold',
        fontSize: 16,
    },
  
    text: {
        fontSize: 20,
        fontFamily: 'Philosopher-Regular'
    },
    
});

export default styles;
