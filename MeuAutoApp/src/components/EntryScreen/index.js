import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const EntryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MeuAuto</Text>
      <Text style={styles.subtitle}>by group3</Text>      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Image source={require('../../../assets/car.png')} style={styles.image} />
    </View>
  );
};

export default EntryScreen;
