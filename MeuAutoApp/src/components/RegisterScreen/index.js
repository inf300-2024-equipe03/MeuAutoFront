import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import { TextInput } from 'react-native';

const RegisterScreen = ({ navigation, userName }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                
                <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('SelectAutoScreen')}>
                    <Text style={styles.enterButtonText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;
