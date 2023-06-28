import { StyleSheet } from "react-native";
import {COLORS} from "../../../constants";
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontFamily:'Philosopher-Bold',
    marginBottom: 10,
    textAlign: "center"
  },
  detailContainer: {
    paddingVertical:20,
    paddingHorizontal:20
  },
  detailMessage: {
    marginTop:12,
    fontFamily:'Philosopher-Regular',
    fontSize: 17,
    color:  COLORS.text,
    textAlign: "center"
  },
  selectedEvent: {
    fontFamily:'Philosopher-Bold',
    paddingVertical:5,
    fontSize: 18,
    color:  COLORS.darkGray,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    minWidth: 300,
    maxWidth: "80%",
  },
});