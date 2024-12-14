import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import styles from './style';
import CarResource from '../../resources/CarResource';

const SelectAutoScreenStep2 = ({ route, navigation, userName }) => {

    const { selectedBrandId, selectedModelId, selectedVersionId } = route.params;

    const [value, setValue] = useState('');
    const [brand, setBrand] = useState('');
    const [modelName, setModelName] = useState('');
    const [year, setYear] = useState('');
    const [fuel, setFuel] = useState('');

    useEffect(() => {
        const getAdditionalInfo = async () => {
            try {
                const response = await CarResource.getCar(selectedBrandId, selectedModelId, selectedVersionId);
                setValue(response.data.value);
                setBrand(response.data.brand);
                setModelName(response.data.modelName);
                setYear(response.data.year);
                setFuel(response.data.fuel);
            } catch (error) {
                console.error('Error fetching additional car info:', error);
            }
        };


        getAdditionalInfo();
    }, []);

    // Função para confirmar o agendamento
    const handleConfirm = async () => {
        try {
            const response = await CarResource.createCar(value, brand, modelName, year, fuel);
            const message = "Carro adicionado com sucesso";

            // Exibe um toast ou alert dependendo da plataforma
            if (Platform.OS === 'android') {
                ToastAndroid.show(message, ToastAndroid.SHORT);
            } else {
                Alert.alert(message);
            }

            // Navegação para a página de entrada após o sucesso
            navigation.navigate('HomePage');
        } catch (error) {
            console.log(error)
            Alert.alert('Erro', 'Verifique os dados informados');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Confirme o seu carro:</Text>

                <View style={styles.infoContainer}></View>
                    <Text style={styles.item}>Marca: {brand}</Text>
                    <Text style={styles.item}>Modelo: {modelName}</Text>
                    <Text style={styles.item}>Ano: {year}</Text>
                    <Text style={styles.item}>Combustível: {fuel}</Text>
                    <Text style={styles.item}>Valor de mercado: {value}</Text>
                
            <TouchableOpacity style={styles.enterButton} onPress={handleConfirm}>
                <Text style={styles.enterButtonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectAutoScreenStep2;
