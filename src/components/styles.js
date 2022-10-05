import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    number: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    textNumber: {
      color: '#888888',
      textAlign: 'center',
      fontSize: 144,
    },
    lineButton: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },  
    button: {
      margin: 10,
      padding: 10,
      borderRadius: 25
    },
    textButtonPlus: {
      textAlign: 'center',
      fontSize: 128,
    },  
    textButtonMinus: {
      textAlign: 'center',
      fontSize: 128,
      fontWeight: 'bold'
    },
    resetButton: {
      margin: 10,
      padding: 20,
      borderRadius: 25
    },
    textResetButton: {
      textAlign: 'center',
      fontSize: 24
    },
  });
  