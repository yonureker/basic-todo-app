import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ outputText, setOutputText ] = useState('Open up App.js to start working')

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput placeholder="Course Goal" style={styles.textInput}/>
        <Button title="ADD"/>
      </View>

      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
