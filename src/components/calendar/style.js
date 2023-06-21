import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  
  
    dayContainer: {
      width: 30,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabledDayContainer: {
      opacity: 0.5,
    },
    dayText: {
      fontSize: 12,
      color: COLORS.black,
    },
    disabledDayText: {
      color: COLORS.disabledBlack,
    },
    todayContainer: {
      justifyContent: 'center', 
      alignItems: 'center', 
    },
    todayText: {
      color: COLORS.text,
      fontWeight: 'bold',
      backgroundColor: COLORS.backgroundList,
      borderRadius: 40,
      paddingHorizontal: 6,
      paddingVertical: 5,
      marginTop: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      },
      calendarContainer: {
        height: 500, 
        paddingVertical: 20,
      },
  });
  
export default styles;
