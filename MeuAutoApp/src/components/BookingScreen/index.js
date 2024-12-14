import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './style';

const BookingScreen = ({ navigation }) => {
    const [location, setLocation] = useState('');

    const handleNavigate = () => {
        navigation.navigate('AutoshopScreen', {
          location: location,
        });
      };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
                <View style={styles.divider} />
                <Text style={styles.title}>Qual o CEP da sua localização?</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Digite o seu CEP"
                        placeholderTextColor="#888"
                        onChangeText={(text) => setLocation(text)}
                    />
                </View>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -22.902,
                        longitude: -47.048,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}>
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.049 }}
                        title="Lutum Motors - Oficina Mecânica e Performance Campinas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.933, longitude: -47.073 }}
                        title="Oficina mecânica Campinas - EG Torque"
                    />
                    <Marker
                        coordinate={{ latitude: -22.819, longitude: -47.064 }}
                        title="RB Oficina Mecânica Campinas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.892, longitude: -47.073 }}
                        title="Sassa Oficina Mecânica"
                    />
                    <Marker
                        coordinate={{ latitude: -22.912, longitude: -47.057 }}
                        title="Maretti Centro Automotivo em Campinas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.050 }}
                        title="Auto Mecânica Attuali - Oficina Multimarcas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.049 }}
                        title="Bosch Car Service - Centrus Oficina Mecânica"
                    />
                    <Marker
                        coordinate={{ latitude: -22.905, longitude: -47.057 }}
                        title="Oficina Mecânica João Jorge"
                    />
                    <Marker
                        coordinate={{ latitude: -22.900, longitude: -47.049 }}
                        title="Cav Import - Oficina Mecânica e Funilaria Campinas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.049 }}
                        title="CS Oficina Mecânica Especializada"
                    />
                    <Marker
                        coordinate={{ latitude: -22.905, longitude: -47.057 }}
                        title="AUTO MECÂNICA GLICÉRIO"
                    />
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.049 }}
                        title="CS Oficina Mecânica Especializada"
                    />
                    <Marker
                        coordinate={{ latitude: -22.892, longitude: -47.057 }}
                        title="Auto Center Osmar - Oficina Mecânica"
                    />
                    <Marker
                        coordinate={{ latitude: -22.912, longitude: -47.057 }}
                        title="Auto Center Osmar - Oficina Mecânica"
                    />
                    <Marker
                        coordinate={{ latitude: -22.912, longitude: -47.057 }}
                        title="UTACAR - Oficina Mecânica Nacionais e Importados"
                    />
                    <Marker
                        coordinate={{ latitude: -22.892, longitude: -47.073 }}
                        title="Oficina Mecânica Campinas Perescar"
                    />
                    <Marker
                        coordinate={{ latitude: -22.905, longitude: -47.057 }}
                        title="Real Auto Center: Oficina Mecânica | Centro Automotivo"
                    />
                    <Marker
                        coordinate={{ latitude: -22.912, longitude: -47.057 }}
                        title="Mecânica Vasconcelos"
                    />
                    <Marker
                        coordinate={{ latitude: -22.900, longitude: -47.049 }}
                        title="Auto mecânica Osmar - Oficina"
                    />
                    <Marker
                        coordinate={{ latitude: -22.905, longitude: -47.057 }}
                        title="Oficina do Vavá"
                    />
                    <Marker
                        coordinate={{ latitude: -22.892, longitude: -47.073 }}
                        title="Art Mecânica"
                    />
                    <Marker
                        coordinate={{ latitude: -22.819, longitude: -47.064 }}
                        title="Oficina Mecânica Do Gaúcho Campinas"
                    />
                    <Marker
                        coordinate={{ latitude: -22.878, longitude: -47.049 }}
                        title="Performance Point"
                    />
                    <Marker
                        coordinate={{ latitude: -22.933, longitude: -47.073 }}
                        title="AUTO MECÂNICA CAVALO"
                    />
                    <Marker
                        coordinate={{ latitude: -22.892, longitude: -47.073 }}
                        title="Mecânica Lourenço"
                    />
                    <Marker
                        coordinate={{ latitude: -22.900, longitude: -47.049 }}
                        title="Hard Car Serviços Automotivos | Oficina Mecânica | Campinas - SP"
                    />
                    <Marker
                        coordinate={{ latitude: -22.933, longitude: -47.073 }}
                        title="Fast Service Auto Center - Oficina Mecânica e Auto Elétrica"
                    />
                </MapView>

                <TouchableOpacity 
                    style={styles.enterButton}
                    onPress={handleNavigate}
                >
                    <Text style={styles.enterButtonText}>Buscar Oficinas</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default BookingScreen;
