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
    fontSize: 18,
    fontFamily:'Philosopher-Bold',
    marginBottom: 10,
    textAlign: "center"
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontFamily:'Philosopher-Regular',
    fontSize: 16,
    color:  COLORS.text,
    textAlign: "center"
  },
  selectedEvent: {
    fontSize: 14,
    color:COLORS.text,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
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