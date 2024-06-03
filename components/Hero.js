import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Hero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.helloText}>Hello, Devs</Text>
        <Text style={styles.taskText}>14 tasks today</Text>
      </View>
      <Image
        style={styles.profilePic}
        source={require('../assets/person.png')}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  helloText: {
    width: 277,
    fontFamily: "Lato",
    fontSize: 36,
    fontWeight: "500",
    fontStyle: "bold",
    color: "#000000",
  },
  taskText: {
    width: 170,
    height: 52,
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 12,
    color: "#000000",
  },
  profilePic: {
    width: 46,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 90,
    marginBottom: 40,
    paddingRight: 30,
  },
});

export default Hero;
