import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ number, setNumber ] = useState(0)

  const inc = () => setNumber(number + 1)
  const dec = () => setNumber(number - 1)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>{number}</Text>
      <Button title='+' color="#fff" onPress={inc}/>
      <Button title='-' color="#f194ff" onPress={dec}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36
  },
  button: {
    backgroundColor: '#fff',

  }
});
