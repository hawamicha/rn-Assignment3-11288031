import React from 'react';
import { View, TextInput,Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#000000"
        />
      </View>
      <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/setting-lines.png')} style={{width: 24, height: 24}} />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 353, 
    height: 48,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FBF9F7",
    borderWidth: 1,
    borderColor: "rgba(251, 249, 247, 1.0)",
    padding: 10,
    marginRight: 40, 
  },
    input: {
        width: 200,
        height: 48,
        marginLeft: 10,
  },
  button: {
    width: 50,
    height: 48,
    backgroundColor: "#ff4307",
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
