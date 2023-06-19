import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    button: {
        backgroundColor: COLORS.background,
        paddingVertical: 25,
        paddingHorizontal: 90,
    }

});

export default styles;
