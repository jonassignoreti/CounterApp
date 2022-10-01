import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, Appearance, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ number, setNumber ] = useState(0)
  
  const inc = () => setNumber(number + 1)
  const dec = () => setNumber(number - 1)
  const reset = () => {
    setNumber(0)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>{number}</Text>
      <View style={styles.button}>
        <Button title='+' onPress={inc}/>
      </View>
      <View style={styles.button}>
        <Button title='-' onPress={dec}/>
      </View>
      <View style={styles.button}>
        <Button title='RESET' onPress={reset}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: (cs === 'dark') ? '#000' : '#fff' ,
    justifyContent: 'center',
  },
  text: {
    color: '#888888',
    textAlign: 'center',
    fontSize: 128
  },
  button: {
    margin: 10,
    padding: 40,
    backgroundColor: '#dddddd',
    borderRadius: 10
  }
});
