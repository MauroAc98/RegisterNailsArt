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
        marginVertical: 10,
    },
    input: {
        textAlign: 'center',
        width: '70%',
        paddingVertical: 10,
        borderBottomColor: COLORS.disabledBlack,
        borderBottomWidth: 1,
        fontFamily: 'Philosopher-Regular',
        fontSize: 15,
    },
  
    text: {
        fontSize: 20,
        fontFamily: 'Philosopher-Regular'
    },
    
});

export default styles;
