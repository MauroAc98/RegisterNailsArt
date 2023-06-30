import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginBottom:40
  },
  font:{
    fontSize: 16,
    fontFamily:'Philosopher-Bold'
  },
  colorCheck:{
    color:COLORS.primary
  }
});

export default styles;
