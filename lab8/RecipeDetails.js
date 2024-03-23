import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RecipeDetails = () => {
  const route = useRoute();
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <View style={styles.ingredientsContainer}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsContainer: {
    flexDirection: 'column',
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RecipeDetails;
