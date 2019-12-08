import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(courseGoals => [...courseGoals, {id: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputText}>
        <TextInput placeholder = 'Enter course goal...' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button  title="Add" style={styles.addButton}  onPress={addGoalHandler}/>
      </View>

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value} />}
        />
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
