import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function RecipeIngredient({ pressHandler, Ingred }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(Ingred.key)}>
      <Text style={styles.Ingred}>{Ingred.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Ingred: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});