import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 25
  },
  dayContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 12
  },
  disabledDayContainer: {
    opacity: 0.5,
  },
  selectedDayContainer: {
    backgroundColor: COLORS.backgroundList,
    borderWidth: 0,
  },
  dayText: {
    fontFamily:'Philosopher-Regular',
    color: COLORS.black,
  },
  disabledDayText: {
    color: COLORS.disabledBlack,
  },
  selectedDayText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
export default styles;