import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native';
import AutoShopResource from '../../resources/AutoShopResource';

const AutoshopScreen = ({ route, navigation }) => {

    const { location } = route.params;

    const [autoshops, setAutoshops] = useState([]);

    useEffect(() => {
        const loadAutoShops = async () => {
            try {
                const response = await AutoShopResource.findAutoShops(location);
                if (response && response.data) {
                    setAutoshops(response.data); // Atualiza as informações do carro
                } else {
                    setAutoshops([]); // Se não houver dados, define car como null
                }
            } catch (error) {
                console.error('Erro ao carregar dados de oficinas:', error);
                setAutoshops([]); // Caso ocorra erro, define car como null
            }
        };

        loadAutoShops();
    }, []);


    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Oficinas próximas a você</Text>
            <ScrollView style={styles.scrollView}>
                {autoshops.map(autoshops => (
                    <TouchableOpacity 
                        key={autoshops.id} 
                        style={styles.autoshopsItem} 
                        onPress={() => navigation.navigate('SelectdateScreen', { autoshopsId: autoshops.id })}
                    >
                        <Text style={styles.autoshopsTitle}>{autoshops.name}</Text>
                        <Text style={styles.autoshopsText}>Avaliação: {autoshops.rating}/5.0</Text>
                        <Text style={styles.autoshopsText}>Distancia: {autoshops.distanceFromUser}</Text>
                        <Text style={styles.autoshopsText}>Endereço: {autoshops.addressDescription}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default AutoshopScreen;
