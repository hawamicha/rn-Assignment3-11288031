import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Card = ({ title, subText, image }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubText}>{subText}</Text>
      <Image source={image} style={styles.cardImage} />
    </View>
  );
};

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <Card 
          title="Exercise" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Study" 
          subText="12 tasks"
          image={require('../assets/working_at_desk.png')} 
        />
        <Card 
          title="Fitness" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="School" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="News" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Interests" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Clubs" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Trip" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Home" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
        <Card 
          title="Church" 
          subText="12 tasks"
          image={require('../assets/working_online.png')} 
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  card: {
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: "#FBF9F7",
    marginRight: 23, 
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubText: {
    position: 'absolute',
    top: 35, 
    left: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 150,
    height: 150,
    marginTop: 20, 
  },
});

export default Categories;
