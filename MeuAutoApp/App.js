import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from './src/components/EntryScreen';
import LoginScreen from './src/components/LoginScreen';
import SelectAutoScreen from './src/components/SelectAutoScreen';
import HomePage from './src/components/HomePage';
import MenuScreen from './src/components/MenuScreen';
import BookingScreen from './src/components/BookingScreen';
import AutoshopScreen from './src/components/AutoshopScreen';
import SelectdateScreen from './src/components/SelectdateScreen';
import CommentScreen from './src/components/CommentScreen';
import ReviewScreen from './src/components/ReviewScreen';
import RegisterScreen from './src/components/RegisterScreen';

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

        {/* Tela de Registro */}
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />
        
        {/* Tela de Seleção de Automóvel */}
        <Stack.Screen
        name="SelectAutoScreen"
        component={SelectAutoScreen}
        options={{  headerShown: false}}
        />
  
        {/* Tela de Home */}
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{  headerShown: false}}
        />

        {/* Tela de Menu */}
        <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{  headerShown: false}}
        />

        {/* Tela de Agendamento */}
        <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{  headerShown: false}}
        />

        {/* Tela de Oficina */}
        <Stack.Screen
          name="AutoshopScreen"
          component={AutoshopScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />
        {/* Tela de Seleção de Data */}
        <Stack.Screen
          name="SelectdateScreen"
          component={SelectdateScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />

        {/* Tela de Comentários */}
        <Stack.Screen
          name="CommentScreen"
          component={CommentScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />

        {/* Tela de Revisão */}
        <Stack.Screen
          name="ReviewScreen"
          component={ReviewScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho, se necessário
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}