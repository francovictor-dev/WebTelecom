import React from 'react';
import Login from './src/view/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/components/BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  /*
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  */
  return (
     
    <NavigationContainer>

      <Stack.Navigator screenOptions={{animation: 'flip'}}>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="User" component={BottomTabs} options={{headerShown: false}}/>
      </Stack.Navigator>

    </NavigationContainer>
 
      
  );
}

