import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import styles from './style';
import { TextInput } from 'react-native';
import UserResource from '../../resources/UserResource';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(name);
    console.log(email);
    console.log(password);

    const register = async () => {
        if (email === '' || password === '') {
          Alert.alert('Preencha o email e a senha');
        } else {
          try {
            const response = await UserResource.register(email, password, name);
            Alert.alert('Parabens!', 'Conta criada com sucesso');
            navigation.navigate('LoginScreen');
          } catch (error) {
            Alert.alert('Erro', 'Verifique os dados informados');
          }
        }
      };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
                <View style={styles.divider} />
                <Text style={styles.title}>Insira seus dados:</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                
                <TouchableOpacity style={styles.enterButton} onPress={register}>
                    <Text style={styles.enterButtonText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;
