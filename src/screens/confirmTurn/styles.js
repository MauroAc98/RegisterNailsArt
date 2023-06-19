import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        paddingVertical: 40,
        flex: 1
    },
    containerButton: {
        alignItems: 'center'
    },
});

export default styles;
