import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
      paddingVertical:30,
      backgroundColor:COLORS.background,
      flex:1,
    },
    containerConfirm:{
        paddingVertical:20,
        backgroundColor:COLORS.background,
        marginHorizontal:40
    }
});

export default styles;
