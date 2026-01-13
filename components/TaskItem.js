// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// export default function TaskItem({ task, onToggle, onDelete }) {
//   return (
//     <View style={styles.item}>
//       <TouchableOpacity onPress={() => onToggle(task.id)}>
//         <Text
//           style={[
//             styles.text,
//             task.completed && styles.completed,
//           ]}
//         >
//           {task.title}
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => onDelete(task.id)}>
//         <Text style={styles.delete}>X</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 12,
//     backgroundColor: "#fff",
//     marginBottom: 8,
//     borderRadius: 5,
//   },
//   text: {
//     fontSize: 16,
//   },
//   completed: {
//     textDecorationLine: "line-through",
//     color: "gray",
//   },
//   delete: {
//     color: "red",
//     fontWeight: "bold",
//   },
// });
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";

// export default function TaskItem({ task, onToggle, onDelete }) {
//   if (!task) return null; // 💥 prevents crash

//   return (
//     <View style={styles.item}>
//       <TouchableOpacity
//         style={styles.textContainer}
//         onPress={() => onToggle(task.id)}
//       >
//         <Text
//           style={[
//             styles.text,
//             task.completed && styles.completed,
//           ]}
//         >
//           {task.title}
//         </Text>
//         <Text style={styles.status}>
//           {task.completed ? "Completed" : "Pending"}
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => onDelete(task.id)}>
//         <Text style={styles.delete}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 6,
//     marginBottom: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   textContainer: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 16,
//   },
//   completed: {
//     textDecorationLine: "line-through",
//     color: "gray",
//   },
//   status: {
//     fontSize: 12,
//     color: "#666",
//   },
//   delete: {
//     color: "red",
//   },
// });
// TaskItem.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TaskItem({ task, onToggle, onDelete }) {
  if (!task) return null;

  return (
    <View style={[
      styles.item,
      task.completed && styles.itemCompleted
    ]}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => onToggle(task.id)}
        activeOpacity={0.7}
      >
        {/* Checkbox Icon */}
        <View style={styles.checkboxContainer}>
          {task.completed ? (
            <View style={styles.checkboxChecked}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          ) : (
            <View style={styles.checkboxUnchecked} />
          )}
        </View>

        {/* Task Content */}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              task.completed && styles.textCompleted,
            ]}
          >
            {task.title}
          </Text>
          <View style={[
            styles.badge,
            task.completed ? styles.badgeCompleted : styles.badgePending
          ]}>
            <Text style={[
              styles.badgeText,
              task.completed ? styles.badgeTextCompleted : styles.badgeTextPending
            ]}>
              {task.completed ? "✓ Completed" : "○ Pending"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Delete Button */}
      <TouchableOpacity
        onPress={() => onDelete(task.id)}
        style={styles.deleteButton}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  itemCompleted: {
    opacity: 0.75,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  checkboxContainer: {
    marginRight: 12,
  },
  checkboxUnchecked: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#9CA3AF",
  },
  checkboxChecked: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#1F2937",
    marginBottom: 6,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#6B7280",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgePending: {
    backgroundColor: "#DBEAFE",
  },
  badgeCompleted: {
    backgroundColor: "#D1FAE5",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  badgeTextPending: {
    color: "#1E40AF",
  },
  badgeTextCompleted: {
    color: "#065F46",
  },
  deleteButton: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    borderRadius: 10,
  },
  deleteIcon: {
    fontSize: 20,
  },
});
