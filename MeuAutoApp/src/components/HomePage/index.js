import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import CarResource from '../../resources/CarResource';

const HomePage = ({ navigation }) => {
    // Definindo o estado para armazenar os dados do usuário e token
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [car, setCar] = useState(null)

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

        const loadCar = async () => {
            try {
                const response = await CarResource.findCarByUser();
                console.log(response)
                if (response && response.data) {
                    setCar(response.data); // Atualiza as informações do carro
                } else {
                    setCar(null); // Se não houver dados, define car como null
                }
            } catch (error) {
                console.error('Erro ao carregar dados do carro:', error);
                setCar(null); // Caso ocorra erro, define car como null
            }
        };

        // Chama a função loadData assim que o componente for montado
        loadData();
        loadCar();
    }, []);



    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Olá, {username}</Text>

            {car && car !== null && Object.keys(car).length > 0 ? (
                // Exibe as informações do carro se car não for null e não for um objeto vazio
                <>
                    <View style={styles.subcontainer}>
                        <Image source={require('../../../assets/steering-icon.png')} style={styles.iconLeft}/>
                        <View>
                            <Text style={styles.subtitle}>Meu carro: {car.model || 'Modelo não disponível'}</Text>
                            <Text style={styles.text}>Ano: {car.year || 'Ano não disponível'}</Text>
                            <Text style={styles.text}>km: {car.km || 'km não disponível'}</Text>
                        </View>
                    </View>

                    <View style={styles.subcontainer}>
                        <Image source={require('../../../assets/maintenance-icon.png')} style={styles.iconLeft2} />
                        <Text style={styles.text}>Próxima revisão: {car.nextReview || 'Data não disponível'}</Text>
                    </View>

                    <View style={styles.subcontainer}>
                        <Image source={require('../../../assets/insurance-icon.png')} style={styles.iconLeft2} />
                        <Text style={styles.text}>Seguro: {car.insuranceStatus || 'Status não disponível'}</Text>
                    </View>

                    <View style={styles.subcontainer}>
                        <Image source={require('../../../assets/price-icon.png')} style={styles.iconLeft2} />
                        <Text style={styles.text}>Valor de mercado: {car.marketValue || 'Valor não disponível'}</Text>
                    </View>

                    <View style={styles.subcontainer}>
                        <Image source={require('../../../assets/infractions-icon.png')} style={styles.iconLeft2} />
                        <Text style={styles.text}>Você não possui infrações</Text>
                    </View>

                    <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('MenuScreen')}>
                        <Text style={styles.enterButtonText}>Serviços</Text>
                    </TouchableOpacity>
                </>
            ) : (
                // Exibe uma mensagem caso não haja informações do carro
                <>
                    <View style={styles.subcontainer}>
                        <Text style={styles.text}>Você ainda não tem nenhum carro</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.enterButton}
                        onPress={() => navigation.navigate('SelectAutoScreen')}
                    >
                        <Text style={styles.enterButtonText}>Adicionar Carro</Text>
                    </TouchableOpacity>
                </>
            )}

        </View>
    );
};

export default HomePage;
