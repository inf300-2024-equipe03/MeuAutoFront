import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';

const SelectAutoScreen = ({ userName }) => {
    const [list1, setList1] = useState(['Option 1A', 'Option 1B', 'Option 1C']);
    const [list2, setList2] = useState(['Option 2A', 'Option 2B', 'Option 2C']);
    const [list3, setList3] = useState(['Option 3A', 'Option 3B', 'Option 3C']);
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
            <Text style={styles.title}>Olá, {userName}</Text>
            <Picker
                selectedValue={selectedItem1}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedItem1(itemValue)}
            >
                {list1.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
            <Picker
                selectedValue={selectedItem2}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedItem2(itemValue)}
            >
                {list2.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
            <Picker
                selectedValue={selectedItem3}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedItem3(itemValue)}
            >
                {list3.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
        </View>
    );
};

export default SelectAutoScreen;
