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
                    latitude: 40.715,
                    longitude: -73.850,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                    }}>
                    <Marker
                        coordinate={{ latitude: 40.715, longitude: -73.850 }}
                        title="Oficina Exemplo"
                        description="Descrição da Oficina"
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
