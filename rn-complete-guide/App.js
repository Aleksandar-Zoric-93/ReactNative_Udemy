import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals => [...courseGoals, {id: Math.random().toString(), value: goalTitle}]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem onDelete={() => console.log('Did this work?')} title={itemData.item.value} />}
        />
</View>
  );
}

      
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  addButton: {
   backgroundColor: 'red'
  }
});
