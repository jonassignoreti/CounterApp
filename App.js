import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ number, setNumber ] = useState(0)
  const [ red, setRed ] = useState(255)
  const [ green, setGreen ] = useState(255)
  const [ blue, setBlue ] = useState(255)
  
  const inc = () => setNumber(Number(number) + 1)
  const dec = () => setNumber(Number(number) - 1)
  const reset = () => {
    setNumber(0)
    setRed(Math.floor(Math.random() * 256) + 100)
    setGreen(Math.floor(Math.random() * 256) + 100)
    setBlue(Math.floor(Math.random() * 256) + 100)
  }
  
  return (
    <SafeAreaView style={[{backgroundColor: `rgb(${red}, ${green}, ${blue})`}, styles.container]}>
      <StatusBar />
      <View style={styles.number}> 
        <TextInput 
          style={styles.textNumber}
          onChangeText={setNumber}
          value={number}
          placeholder={`${number}`}
          keyboardType="numeric"
          cursorColor='#888'
          />
      </View>
      <View style={styles.lineButton}>
        <TouchableOpacity style={{width: "50%"}} onPress={dec}>
          <View style={styles.button}>
            <Text style={styles.textButton}>-</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "50%"}} onPress={inc}>
          <View style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={reset}>
        <View style={styles.resetButton}>
          <Text style={styles.textResetButton}>Reset</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#dddddd',
    borderRadius: 25
  },
  textButton: {
    color: '#888888',
    textAlign: 'center',
    fontSize: 128
  },
  resetButton: {
    margin: 10,
    padding: 20,
    backgroundColor: '#dddddd',
    borderRadius: 25
  },
  textResetButton: {
    color: '#888888',
    textAlign: 'center',
    fontSize: 32
  },
});
