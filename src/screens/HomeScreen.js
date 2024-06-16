import { Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';
import RecipeData from '../components/Data';

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(shuffleArray(RecipeData));

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredRecipes(shuffleArray(RecipeData));
    } else {
      const filtered = RecipeData.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    }
  }, [searchQuery]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.img} source={require('../assets/icon.png')} />
        <Image style={styles.img1} source={require('../assets/bell.png')} />
      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>
          Make your own food,
          {'\n'}stay at <Text style={styles.highlight}>Home</Text>
        </Text>
      </View>

      <View style={styles.row2}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Categories</Text>
      </View>

      <View style={styles.row3}>
        <CategoryList />
      </View>

      <View style={styles.row1}>
        <Text style={styles.text}>Recipes</Text>
      </View>

      <View style={styles.recipesContainer}>
        {filteredRecipes.map(recipe => (
          <Pressable
            key={recipe.id}
            onPress={() => navigation.navigate('DetailScreens', {
              id: recipe.id,
              image: recipe.image,
              title: recipe.name,
              ingredients: recipe.ingredients,
              instructions: recipe.instructions,
            })}
          >
            <Card image={recipe.image} title={recipe.name} />
          </Pressable>
        ))}
      </View>
      
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  row1: {
    width: '80%',
    marginTop: 20,
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  img1: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  highlight: {
    color: '#ffd700',
  },
  row2: {
    marginTop: 10,
  },
  row3: {
    marginTop: 5,
  },
  recipesContainer :{
    marginTop : 20,
  }
});
