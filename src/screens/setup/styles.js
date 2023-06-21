import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: 20,
    flex:1
  },
 
  containerTouchable: {
    height: 80,
    borderRadius: 5,
    marginHorizontal: 40,
    marginVertical: 7,
    backgroundColor: COLORS.backgroundList,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Philosopher-Regular',
    color: COLORS.text,
  },

});

export default styles;
