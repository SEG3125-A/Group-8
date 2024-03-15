import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeApp from './RecipeApp'; // The file that contains the code you posted
import StepsPage from './components/StepsPage'; // The file for your StepsPage component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeApp">
        <Stack.Screen name="RecipeApp" component={RecipeApp} />
        <Stack.Screen name="StepsPage" component={StepsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
