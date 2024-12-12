import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';

const SelectAutoScreen = ({ userName }) => {
    const [list1, setList1] = useState(['Marca','Audi', 'BMW', 'Mercedes']);
    const [list2, setList2] = useState(['Modelo','Option 2A', 'Option 2B', 'Option 2C']);
    const [list3, setList3] = useState(['Ano/Versão','Option 3A', 'Option 3B', 'Option 3C']);
    const [selectedItem1, setSelectedItem1] = useState('');
    const [selectedItem2, setSelectedItem2] = useState('');
    const [selectedItem3, setSelectedItem3] = useState('');

    useEffect(() => {
        // Simulação de fetch para listas
        // fetch('backend_endpoint')
        //   .then(response => response.json())
        //   .then(data => {
        //     setList1(data.list1);
        //     setList2(data.list2);
        //     setList3(data.list3);
        //   });
    }, []);

    return (
        <View style={styles.container1}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Selecione o seu carro:</Text>

            <TouchableOpacity style={styles.enterButton} onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.enterButtonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectAutoScreen;
