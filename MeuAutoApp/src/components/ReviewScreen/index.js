import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid, Alert, Platform } from 'react-native';
import SchedulingResource from '../../resources/SchedulingResource';
import AutoShopResource from '../../resources/AutoShopResource';

import styles from './style';

const ReviewScreen = ({ navigation, route }) => {
    const { autoshopsId, date, comment } = route.params;
    const [autoshop, setAutoshop] = useState(null);

    // Carregar dados da oficina
    useEffect(() => {
        const loadAutoShop = async () => {
            try {
                const response = await AutoShopResource.findAutoShopById(autoshopsId);
                if (response && response.data) {
                    setAutoshop(response.data); // Atualiza os dados da oficina
                } else {
                    setAutoshop(null); // Caso não haja dados, define autoshop como null
                }
            } catch (error) {
                console.error('Erro ao carregar dados da oficina:', error);
                setAutoshop(null); // Caso ocorra erro, define autoshop como null
            }
        };

        loadAutoShop();
    }, [autoshopsId]); // Dependência adicionada para garantir que a busca seja feita sempre que autoshopsId mudar.

    // Função para confirmar o agendamento
    const handleConfirm = async () => {
        try {
            const response = await SchedulingResource.createScheduling(autoshopsId, date);
            const message = "Agendamento realizado com sucesso";

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

    if (!autoshop) {
        return (
            <View style={styles.container}>
                <Text>Carregando informações da oficina...</Text>
            </View>
        );
    }

    // Formatar data e hora, se necessário
    const formattedDate = new Date(date);
    const formattedTime = `${formattedDate.getHours().toString().padStart(2, "0")}:${formattedDate.getMinutes().toString().padStart(2, "0")}`;

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Revisar Agendamento</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.item}>Oficina: {autoshop.name}</Text>
                <Text style={styles.item}>Data: {formattedDate.toLocaleDateString()}</Text>
                <Text style={styles.item}>Hora: {formattedTime}</Text>
                <Text style={styles.item}>Observações: {comment}</Text>
            </View>

            <TouchableOpacity 
                style={styles.enterButton}
                onPress={handleConfirm}
            >
                <Text style={styles.enterButtonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReviewScreen;
