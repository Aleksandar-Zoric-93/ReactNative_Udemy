import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputText}>
        <TextInput placeholder = 'Enter course goal...' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button  title="Add" style={styles.addButton}  onPress={addGoalHandler}/>
      </View>
      <View>
  {courseGoals.map(goal => (
  <View  key={goal} style={styles.listItem}>
  <Text>{goal}</Text>
  </View>))}
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
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
