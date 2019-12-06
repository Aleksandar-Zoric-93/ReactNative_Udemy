import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputText}>
        <TextInput placeholder = 'Enter course goal...' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button  title="Add" style={styles.addButton}  onPress={addGoalHandler}/>
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputText: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },

  input:{
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, 
    width: '80%'
  },
  
  addButton: {
   backgroundColor: 'red'
  }
});
