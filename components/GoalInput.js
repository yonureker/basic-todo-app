import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputHandler = inputText => {
    setEnteredGoal(inputText);
  };

  return (
    <Modal
      visible={props.modalStatus}
      animationType='fade'
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
        <Button title="CANCEL" color="red" onPress={() => props.onCancelModal()}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: '40%',
    justifyContent: "space-between",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});

export default GoalInput;
