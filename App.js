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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);

  const inputHandler = inputText => {
    setEnteredGoal(inputText);
  };

  const buttonSubmitHandler = () => {
    setGoalList(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={buttonSubmitHandler} />
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    margin: 0
  }
});
