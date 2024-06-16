import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import RecipeData from '../components/Data';
import Header1 from '../components/Header1';
import Card from '../components/Card';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredRecipes = RecipeData.filter(recipe => recipe.category === category.category);
      setRecipes(filteredRecipes);
    }
  }, [category]);

  return (
    <ScrollView style={styles.container}>
      <Header1 />
      <View style={styles.recipeContainer}>
        {recipes.map(recipe => (
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom : 60,
  },
  recipeContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default CategoryScreen;
