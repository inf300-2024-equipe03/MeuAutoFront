import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

const HomePage = ({ navigation }) => {
    // Definindo o estado para armazenar os dados do usuário e token
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        // Função assíncrona definida dentro do useEffect
        const loadData = async () => {
            try {
                const nameFromStorage = await AsyncStorage.getItem('USERNAME');
                const tokenFromStorage = await AsyncStorage.getItem('TOKEN');

                if (nameFromStorage) {
                    setUsername(nameFromStorage); // Atualiza o nome do usuário
                }
                if (tokenFromStorage) {
                    setToken(tokenFromStorage); // Atualiza o token
                }
            } catch (error) {
                console.error('Erro ao carregar dados do AsyncStorage', error);
            }
        };

        // Chama a função loadData assim que o componente for montado
        loadData();
    }, []); // O array vazio [] garante que o efeito seja executado uma vez após o componente ser montado

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Olá, {username}</Text>

            <View style={styles.subcontainer}>
                <Image source={require('../../../assets/steering-icon.png')} style={styles.iconLeft}/>
                <View>
                    <Text style={styles.subtitle}>Meu carro: Jeep Compass</Text>
                    <Text style={styles.text}>Ano: 2021/2022</Text>
                    <Text style={styles.text}>km: 75.765</Text>
                </View>
            </View>

            <View style={styles.subcontainer}>
                <Image source={require('../../../assets/maintenance-icon.png')} style={styles.iconLeft2} />
                <Text style={styles.text}>Próxima revisão: 81.500 ou 05/01/2025</Text>
            </View>

            <View style={styles.subcontainer}>
                <Image source={require('../../../assets/insurance-icon.png')} style={styles.iconLeft2} />
                <Text style={styles.text}>Seguro: Ativo</Text>
            </View>

            <View style={styles.subcontainer}>
                <Image source={require('../../../assets/price-icon.png')} style={styles.iconLeft2} />
                <Text style={styles.text}>Valor de mercado: R$132.300,00</Text>
            </View>

            <View style={styles.subcontainer}>
                <Image source={require('../../../assets/infractions-icon.png')} style={styles.iconLeft2} />
                <Text style={styles.text}>Você não possui infrações</Text>
            </View>
            
            <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('MenuScreen')}>
                <Text style={styles.enterButtonText}>Serviços</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage;
