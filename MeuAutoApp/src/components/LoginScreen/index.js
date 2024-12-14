'use client';

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import styles from './style';
import UserResource from '../../resources/UserResource';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função assíncrona para fazer login
  const login = async () => {
    if (email === '' || password === '') {
      Alert.alert('Preencha o email e a senha');
    } else {
      try {
        const response = await UserResource.login(email, password);

        await AsyncStorage.setItem(
          'TOKEN',
          response.data.token
        );

        await AsyncStorage.setItem(
          'USERNAME',
          response.data.name
        )

          navigation.navigate('HomePage');
      } catch (error) {
        Alert.alert('Erro', 'Usuario e/ou senha incorreta');
        console.log(error)
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
        <Image source={require('../../../assets/google-fav.png')} style={styles.icon} />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton} onPress={() => {}}>
        <Image source={require('../../../assets/mail-fav.png')} style={styles.icon} />
        <Text style={styles.emailButtonText}>Entrar com e-mail</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.textBox}
        placeholder="Email"
        placeholderTextColor="#888"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.textBox}
        placeholder="Senha"
        placeholderTextColor="#888"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.enterButton} onPress={login}>
        <Text style={styles.enterButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.enterButtonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
