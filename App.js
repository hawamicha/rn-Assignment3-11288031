import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import OngoingTasks from './components/OngoingTask';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Hero />
      <SearchBar />
      <Categories />
      <OngoingTasks />

      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f0e8',
    paddingTop: 30,
    paddingBottom: 10,
    
  },
});
