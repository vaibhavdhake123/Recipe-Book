import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View, Image, Pressable } from 'react-native';
import RecipeData from '../components/Data';

const CategoryList = () => {
  const navigation = useNavigation();
  
  const categories = [
    { name: 'Vegetarian', image: require('../assets/images/Veg.jpg') } ,
    { name: 'Drink', image: require('../assets/images/Drinks.png') },
    { name: 'Salad', image: require('../assets/images/Salad.jpg') },
    { name: 'Breakfast', image: require('../assets/images/Breakfast.png') } ,
    { name: 'Dessert', image: require('../assets/category_dessert.png') },
    { name: 'Breakfast', image: require('../assets/drinks.png') } 
  ];

  const navigateToCategory = (categoryName) => {
    const category = RecipeData.find(category => category.category === categoryName);
    navigation.navigate('CategoryScreen', { category });
  };

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {categories.map((cat, index) => (
        <CategoryItem
          key={index}
          imageSource={cat.image}
          onPress={() => navigateToCategory(cat.name)}
        />
      ))}
    </ScrollView>
  );
};

const CategoryItem = ({ imageSource, onPress }) => (
  <View style={styles.categoryItem}>
    <Pressable onPress={onPress}>
      <Image source={imageSource} style={styles.categoryImage} />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryItem: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'black',
    borderRadius: 50,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default CategoryList;
