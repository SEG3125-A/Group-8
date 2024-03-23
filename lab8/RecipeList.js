import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecipeDetails from './RecipeDetails';

const recipes = [
  {
    name: 'Recipe 1',
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
  },
  {
    name: 'Recipe 2',
    ingredients: ['Ingredient 4', 'Ingredient 5', 'Ingredient 6'],
  },
  {
    name: 'Recipe 3',
    ingredients: ['Ingredient 7', 'Ingredient 8', 'Ingredient 9'],
  },
];

const RecipeCard = ({ recipe }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe })}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.name}</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const RecipeList = () => (
  <ScrollView>
    {recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default RecipeList;
