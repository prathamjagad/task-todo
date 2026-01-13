// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet } from "react-native";

// export default function AddTask({ onAddTask }) {
//   const [task, setTask] = useState("");

//   const addHandler = () => {
//     if (task.trim().length > 0) {
//       onAddTask(task);
//       setTask("");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter task..."
//         value={task}
//         onChangeText={setTask}
//         style={styles.input}
//       />
//       <Button title="Add" onPress={addHandler} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     borderBottomWidth: 1,
//     marginRight: 10,
//     padding: 5,
//   },
// });
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (!taskText.trim()) return;
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What needs to be done?"
          placeholderTextColor="#999"
          value={taskText}
          onChangeText={setTaskText}
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={handleAdd}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
    color: "#333",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

