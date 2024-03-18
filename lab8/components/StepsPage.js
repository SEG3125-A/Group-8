import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

export default function StepsPage() {
  const [steps, setSteps] = useState([]);
  const [input, setInput] = useState('');

  const addStep = () => {
    if (input.length < 10) {
      Alert.alert('Error', 'The input must be at least 10 characters long');
    } else {
      setSteps(prevSteps => [...prevSteps, input]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Step"
        onChangeText={setInput}
        value={input}
      />
      <Button title="Add Step" onPress={addStep} />
      <View style={styles.listContainer}>
        {steps.map((step, index) => (
          <Text key={index} style={styles.step}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  listContainer: {
    marginTop: 20,
  },
  step: {
    marginBottom: 10,
  },
});
