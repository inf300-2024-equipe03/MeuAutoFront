import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const LoginScreen = ({ navigation }) => {
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

      <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.enterButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
