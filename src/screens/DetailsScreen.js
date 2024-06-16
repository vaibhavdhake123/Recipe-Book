import { ScrollView, StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native';
import React from 'react';

import Header from '../components/Header';

const DetailsScreen = ({ route }) => {
  const { image, title, ingredients, instructions } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}>

      <StatusBar barStyle='default' hidden={false} backgroundColor="transparent" translucent={true} />
      
      <ImageBackground source={image} 
        style={styles.imageBackground}>
        <Header />
        <View style={styles.imageOverlay} />
      </ImageBackground>

      <View style={styles.contentContainer}>

        {/* Title and Rating in a row */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rating}>⭐ 4.5</Text>
        </View>

        <Text style={styles.sectionTitle}>Ingredients</Text>

     
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientContainer}>
            <View style={styles.dot} />
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Instructions</Text>
        
       
        {instructions.map((instruction, index) => (
          <View key={index} style={styles.instructionContainer}>
            <Text style={styles.instructionNumber}>{`${index + 1}. `}</Text>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        ))}

      </View>

    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor : 'white',
  },
  imageBackground: {
    height: 350,
    width: "100%",
    justifyContent: 'center',
  },
  imageOverlay: {
    flex: 1,
  },
  contentContainer: {
    marginTop: -40, 
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 25,
    minHeight : 'auto',
    marginBottom : 60,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    width: '80%',
    fontWeight: 'bold',
    color: 'black',
  },
  rating: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    marginRight :10, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: 'black',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
    marginLeft : 2,
  },
  instructionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  instructionText: {
    fontSize: 16,
    color: 'black',
    flex: 1, 
    marginLeft : 2,
    paddingHorizontal : 5,
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft : 2,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ffd700',
    marginRight: 10,
  },
  ingredientText: {
    fontSize: 16,
    color: 'black',
  },
});
