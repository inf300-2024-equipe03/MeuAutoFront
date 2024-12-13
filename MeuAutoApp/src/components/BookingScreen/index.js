import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './style';

const BookingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Onde você está?</Text>

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

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textBox}
                    placeholder="Digite seu endereço"
                    placeholderTextColor="#888"
                />
            </View>

            <TouchableOpacity 
                style={styles.enterButton}
                onPress={() => navigation.navigate('AutoshopScreen')}
            >
                <Text style={styles.enterButtonText}>Buscar Oficinas</Text>
            </TouchableOpacity>

        </View>
    );
};

export default BookingScreen;
