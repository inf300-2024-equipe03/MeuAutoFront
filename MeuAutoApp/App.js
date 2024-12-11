import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from './src/components/EntryScreen';
import LoginScreen from './src/components/LoginScreen';
import SelectAutoScreen from './src/components/SelectAutoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntryScreen">
        {/* Tela de Entrada */}
        <Stack.Screen
          name="EntryScreen"
          component={EntryScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />

        {/* Tela de Login */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />

        {/* Tela de Seleção de Automóvel */}
        <Stack.Screen
        name="SelectAutoScreen"
        component={SelectAutoScreen}
        options={{  headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
