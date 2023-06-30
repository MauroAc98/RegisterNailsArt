import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginBottom: 40
  },
  font: {
    fontSize: 19,
    fontFamily: 'Philosopher-Regular',
    color: COLORS.text
  },
  colorCheck: {
    color: COLORS.primary
  }
});

export default styles;
