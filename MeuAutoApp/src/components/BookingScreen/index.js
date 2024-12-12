import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './style';3

const BookingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Onde vocẽ está?</Text>

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

            <TouchableOpacity style={styles.enterButton}>
                <Text style={styles.enterButtonText}>Buscar Oficinas</Text>
            </TouchableOpacity>

        </View>
    );
};

export default BookingScreen;
