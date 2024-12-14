import React from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid, Alert, Platform } from 'react-native';

import styles from './style';

const ReviewScreen = ({navigation}) => {
    // Variáveis que serão preenchidas com dados do backend
    // const workshop = "Oficina A";
    // const date = "dd/mm/yyyy";
    // const time = "hh/mm";
    // const vehicle = "Meu Veiculo";
    // const serviceType = "xxxxx";
    // const observations = "xxxxx";

    const handleConfirm = () => {
        const message = "Agendamento realizado com sucesso";
        if (Platform.OS === 'android') {
          ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
          Alert.alert(message);
        }
        // Navegação para a página EntryScreen
        navigation.navigate('HomePage');
}

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Revisar Agendamento</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.item}>Oficina: Oficina A</Text>
                <Text style={styles.item}>Data: dd/mm/yyyy</Text>
                <Text style={styles.item}>Hora: hh/mm</Text>
                <Text style={styles.item}>Veículo: Meu Veículo</Text>
                <Text style={styles.item}>Tipo de Serviço: xxxxx</Text>
                <Text style={styles.item}>Observações: xxxxx</Text>
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
