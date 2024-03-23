import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeApp from './RecipeApp'; 
import StepsPage from './components/StepsPage'; 
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeApp">
        <Stack.Screen name="RecipeApp" component={RecipeApp} />
        <Stack.Screen name="StepsPage" component={StepsPage} />
        <Stack.Screen name="RecipeList" component={RecipeList} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
