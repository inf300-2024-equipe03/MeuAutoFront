import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native';

const AutoshopScreen = ({ navigation }) => {
    const autoshops = [
        { id: 1, name: 'AutoShop A', rating: 4.5, address: '123 Main St' },
        { id: 2, name: 'AutoShop B', rating: 4.0, address: '456 Elm St' },
        { id: 3, name: 'AutoShop C', rating: 4.8, address: '789 Oak St' },
        { id: 4, name: 'AutoShop D', rating: 4.2, address: '101 Pine St' },
        { id: 5, name: 'AutoShop E', rating: 4.7, address: '202 Maple St' },
    ];

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Melhores oficinas próximas a você</Text>
            <ScrollView style={styles.scrollView}>
                {autoshops.map(autoshops => (
                    <TouchableOpacity 
                        key={autoshops.id} 
                        style={styles.autoshopsItem} 
                        onPress={() => navigation.navigate('SelectdateScreen', { autoshopsId: autoshops.id })}
                    >
                        <Text style={styles.autoshopsText}>{autoshops.name}</Text>
                        <Text style={styles.autoshopsText}>Rating: {autoshops.rating}</Text>
                        <Text style={styles.autoshopsText}>Address: {autoshops.address}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default AutoshopScreen;
