import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import CarResource from '../../resources/CarResource';

const SelectAutoScreenStep2 = ({ route, navigation, userName }) => {

    const { selectedBrandId, selectedModelId, selectedVersionId, } = route.params;

    const [gasType, setGasType] = useState('');
    const [marketValue, setMarketValue] = useState('');

    const getAdditionalInfo = async () => {
        try {
            const response = await CarResource.get(`/car-info/${selectedBrandId}/${selectedModelId}/${selectedVersionId}`);
            const { gasType, marketValue } = response.data;
            setGasType(gasType);
            setMarketValue(marketValue);
        } catch (error) {
            console.error('Error fetching additional car info:', error);
        }
    };

    useEffect(() => {
        getAdditionalInfo();
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Confirme o seu carro:</Text>

                <View style={styles.infoContainer}></View>
                    <Text style={styles.infoText}>Marca:</Text>
                    <Text style={styles.infoText}>Modelo:</Text>
                    <Text style={styles.infoText}>Ano:</Text>
                    <Text style={styles.infoText}>Combustível:</Text>
                    <Text style={styles.infoText}>Valor de mercado:</Text>
                
            <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.enterButtonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectAutoScreenStep2;
