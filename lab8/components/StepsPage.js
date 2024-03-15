import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function StepsPage() {
  const [steps, setSteps] = useState([]);
  const [input, setInput] = useState('');

  const addStep = () => {
    setSteps(prevSteps => [...prevSteps, input]);
    setInput('');
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
      {steps.map((step, index) => (
        <Text key={index} style={styles.step}>
          {index + 1}. {step}
        </Text>
      ))}
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
  },
  step: {
    marginBottom: 10,
  },
});
