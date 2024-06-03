import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

const OngoingTasks = () => {
  const tasks = [ 
    "Mobile App Development",
  "Web Development",
  "Push Ups",
  "DSA",
  "Read a book",
  "Cook a new recipe",
  "Learn a new language",
  "Write a blog post",
  "Go for a run",
  "Meditate",
  "Clean the house",
  "Call a friend",
  "Plant a tree",
  "Learn a new song on guitar",
  "Watch a documentary",
  "Do grocery shopping",
  "Try a new hobby"]; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 354,
    padding: 10,
  },
  title: {
    width: 200,
    fontFamily: "Lato",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
    
  },
  taskCard: {
    width: 354,
    height: 128,
    borderRadius: 15,
    backgroundColor: "#FBF9F7",
    marginBottom: 10, 
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(232, 209, 186, 1.0)",
  },
  taskText: {
    width: 200,
    height: 19,
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#000000",
  },
});

export default OngoingTasks;
