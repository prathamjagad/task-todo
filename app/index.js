// import React, { useState, useEffect } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import AddTask from "../components/AddTask";
// import TaskItem from "../components/TaskItem";

// export default function HomeScreen() {
//   const [tasks, setTasks] = useState([]);

//   // Load tasks when app starts
//   useEffect(() => {
//     loadTasks();
//   }, []);

//   // Save tasks whenever changed
//   useEffect(() => {
//     saveTasks();
//   }, [tasks]);

//   const loadTasks = async () => {
//     const storedTasks = await AsyncStorage.getItem("TASKS");
//     if (storedTasks) {
//       setTasks(JSON.parse(storedTasks));
//     }
//   };

//   const saveTasks = async () => {
//     await AsyncStorage.setItem("TASKS", JSON.stringify(tasks));
//   };

//   const addTask = (title) => {
//     setTasks([
//       ...tasks,
//       { id: Date.now().toString(), title, completed: false },
//     ]);
//   };

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Task Manager</Text>

//       <AddTask onAddTask={addTask} />

//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TaskItem
//             task={item}
//             onToggle={toggleTask}
//             onDelete={deleteTask}
//           />
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f4f4f4",
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 15,
//   },
// });
// import React, { useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";

// import AddTask from "../components/AddTask";
// import TaskItem from "../components/TaskItem";

// export default function HomeScreen() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (title) => {
//     const newTask = {
//       id: Date.now().toString(),
//       title: title,
//       completed: false,
//     };
//     setTasks((prev) => [...prev, newTask]);
//   };

//   const toggleTask = (id) => {
//     setTasks((prev) =>
//       prev.map((task) =>
//         task.id === id
//           ? { ...task, completed: !task.completed }
//           : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks((prev) => prev.filter((task) => task.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Task Manager</Text>

//       <AddTask onAddTask={addTask} />

//       <FlatList
//         data={tasks}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) =>
//           item ? (
//             <TaskItem
//               task={item}
//               onToggle={toggleTask}
//               onDelete={deleteTask}
//             />
//           ) : null
//         }
//         ListEmptyComponent={
//           <Text style={styles.empty}>No tasks added yet</Text>
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#F5F5F5",
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 15,
//   },
//   empty: {
//     textAlign: "center",
//     marginTop: 30,
//     fontSize: 16,
//     color: "#777",
//   },
// });
// index.js (HomeScreen)
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const pendingCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TO-DO LIST APP</Text>
        <Text style={styles.headerSubtitle}>Stay organized and productive</Text>
        
        {/* Counters */}
        <View style={styles.countersContainer}>
          <View style={styles.counterBox}>
            <Text style={styles.counterLabel}>Pending</Text>
            <Text style={styles.counterValuePending}>{pendingCount}</Text>
          </View>
          <View style={styles.counterBox}>
            <Text style={styles.counterLabel}>Completed</Text>
            <Text style={styles.counterValueCompleted}>{completedCount}</Text>
          </View>
        </View>
      </View>

      {/* Add Task Component */}
      <AddTask onAddTask={addTask} />

      {/* Tasks List */}
      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>○</Text>
          <Text style={styles.emptyText}>No tasks yet</Text>
          <Text style={styles.emptySubtext}>Add your first task to get started!</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem
                task={item}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          
          {/* Footer Stats */}
          <View style={styles.footer}>
            {completedCount === tasks.length ? (
              <Text style={styles.footerTextSuccess}>
                🎉 All tasks completed! Great job!
              </Text>
            ) : (
              <Text style={styles.footerText}>
                Keep going! {pendingCount} task{pendingCount !== 1 ? 's' : ''} remaining
              </Text>
            )}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F2937",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 16,
  },
  countersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  counterBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 120,
    alignItems: "center",
  },
  counterLabel: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },
  counterValuePending: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
  },
  counterValueCompleted: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10B981",
  },
  emptyContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 48,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginTop: 20,
  },
  emptyIcon: {
    fontSize: 64,
    color: "#D1D5DB",
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  footer: {
    paddingVertical: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#6B7280",
  },
  footerTextSuccess: {
    fontSize: 14,
    color: "#10B981",
    fontWeight: "600",
  },
});

