import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TextInput, Button, ScrollView } from 'react-native';
import Header from './components/header';
import RecipeIngredient from './components/RecipeIngredient';
import AddToRecipe from './components/addToRecipe';

import StepsPage from './components/StepsPage';

export default function RecipeApp({ navigation }) {
  const [Ingreds, setIngreds] = useState([
    { text: 'Pepper', key: '1' },
    { text: 'Paprika', key: '2' },
    { text: 'Salt', key: '3' },
    { text: 'Onion', key: '4' },
  ]);

  const [title, setTitle] = useState('');

  const pressHandler = (key) => {
    setIngreds(prevIngred => {
      return prevIngred.filter(Ingred => Ingred.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setIngreds(prevIngred => {
        return [
          { text, key: Math.random().toString() },
          ...prevIngred
        ];
      });
    } else {
      Alert.alert('ohoh', 'Ingredients must be over 4 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder=" Enter Recipe Title"
          onChangeText={setTitle}
          value={title}
        />
        <AddToRecipe submitHandler={submitHandler} />
      </View>
      <ScrollView style={styles.list}>
        {Ingreds.map((item) => (
          <RecipeIngredient key={item.key} Ingred={item} pressHandler={pressHandler} />
        ))}
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go to Steps"
          onPress={() => navigation.navigate('StepsPage')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  titleInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
