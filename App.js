import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './src/components/styles'

export default function App() {
  // some variables with change of state
  const [ number, setNumber ] = useState(0)
  const [ backgroundColor, setBackgroundColor ] = useState('rgb(255, 255, 255)')
  const [ buttonColor, setButtonColor ] = useState('rgb(205, 205, 205)')
  const [ textColor, setTextColor ] = useState ('rgb(105, 105, 105)')
  // Variables of difference of some elements in rgb scale
  const diffButtonColor = 50
  const diffTextColor = 150
  
  const changeColor = () => {
    // this function change the state of colors
    const red = Math.floor(Math.random() * 256) + 150
    const green = Math.floor(Math.random() * 256) + 150
    const blue = Math.floor(Math.random() * 256) + 150
    setBackgroundColor(`rgb(${red}, ${green}, ${blue})`)
    setButtonColor(`rgb(${red - diffButtonColor}, ${green - diffButtonColor}, ${blue - diffButtonColor})`)
    setTextColor(`rgb(${red - diffTextColor}, ${green - diffTextColor}, ${blue - diffTextColor})`)
  }

  const inc = () => setNumber(Number(number) + 1) // increase the counter
  const dec = () => setNumber(Number(number) - 1) // decrements the counter
  const reset = () => { // function to return the counter to zero and change the color
    setNumber(0)
    changeColor()
  }
  
  return (
    // the interface to render
    <SafeAreaView style={[{backgroundColor: backgroundColor}, styles.container]}>
      <StatusBar />
      <View style={styles.number}> 
        <TextInput 
          style={styles.textNumber}
          onChangeText={setNumber}
          value={number}
          placeholder={`${number}`}
          keyboardType="numeric"
          cursorColor={textColor}
          />
      </View>
      <View style={styles.lineButton}>
        <TouchableOpacity style={{width: "50%"}} onPress={dec}>
          <View style={[{backgroundColor: buttonColor}, styles.button]}>
            <Text style={[{color: textColor}, styles.textButtonMinus]}>-</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "50%"}} onPress={inc}>
          <View style={[{backgroundColor: buttonColor}, styles.button]}>
            <Text style={[{color: textColor}, styles.textButtonPlus]}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={reset}>
        <View style={[{backgroundColor: buttonColor}, styles.resetButton]}>
          <Text style={[{color: textColor}, styles.textResetButton]}>RESET</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}