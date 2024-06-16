import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.SearchBarcontainer}>
      <Image style={styles.img} source={require('../assets/search.png')} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="grey"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  SearchBarcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});
