import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [ showModal, setShowModal ] = useState(false);
 
  const addGoalHandler = goalTitle => {
    setGoalList(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setShowModal(false);

  };

  const removeGoalHandler = goalId => {
    setGoalList(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const modalHandler = () => {
    setShowModal(!showModal);
  }

  const cancelModalHandler = () => {
    setShowModal(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={modalHandler} />
      <GoalInput modalStatus={showModal} onAddGoal={addGoalHandler} onCancelModal={cancelModalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
