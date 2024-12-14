import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';
import CarResource from '../../resources/CarResource';

const SelectAutoScreen = ({ navigation, userName }) => {
    const [brands, setBrands] = useState([]);
    const [modelsInBrand, setModelsInBrand] = useState([]);
    const [versions, setVersions] = useState([]);
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    const [selectedModelId, setSelectedModelId] = useState(null);
    const [selectedVersion, setSelectedVersionId] = useState(null);

    useEffect(() => {
        const loadBrands = async () => {
            try {
                const response = await CarResource.findBrands();
                if (response && response.data) {
                    setBrands(response.data); // Atualiza as informações do carro
                } else {
                    setBrands([]); // Se não houver dados, define car como null
                }
            } catch (error) {
                console.error('Erro ao carregar dados da marca:', error);
                setBrands([]); // Caso ocorra erro, define car como null
            }
        };

        loadBrands();
    }, []);

    useEffect(() => {
        const loadModelsByBrandId = async () => {
            if(selectedBrandId !== null){
                try {
                const response = await CarResource.findModelsByBrandId(selectedBrandId);
                if (response && response.data) {
                    setModelsInBrand(response.data); // Atualiza as informações do carro
                } else {
                    setModelsInBrand([]); // Se não houver dados, define car como null
                }
                } catch (error) {
                    console.error('Erro ao carregar dados dos modelos:', error);
                    setModelsInBrand([]); // Caso ocorra erro, define car como null
                }
            }else{
                setModelsInBrand([]); // Caso ocorra erro, define car como null
            }
        };

        loadModelsByBrandId();
    }, [selectedBrandId]);

    useEffect(() => {
        const loadVersionByBrandAndModel = async () => {
            if(selectedBrandId !== null && selectedModelId !== null){
                try {
                    const response = await CarResource.findVersionByBrandAndModel(selectedBrandId, selectedModelId);
                    if (response && response.data) {
                        setVersions(response.data); // Atualiza as informações do carro
                    } else {
                        setVersions([]); // Se não houver dados, define car como null
                }
                } catch (error) {
                    console.error('Erro ao carregar dados da versoes:', error);
                    setVersions([]); // Caso ocorra erro, define car como null
            }
            }else{
                setVersions([]); // Caso ocorra erro, define car como null
            }
        };

        loadVersionByBrandAndModel();
    }, [selectedBrandId, selectedModelId]);

    const handleNextStep = () => {navigation.navigate('SelectAutoScreenStep2', { 
        selectedBrandId,
        selectedModelId,
        selectedVersionId,    
        })  
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/auto-icon.png')} style={styles.icon} />
            <View style={styles.divider} />
            <Text style={styles.title}>Selecione o seu carro:</Text>
            <Picker
                selectedValue={selectedBrandId}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedBrandId(itemValue)}
                itemStyle={styles.pickerItem} // Estiliza os itens do dropdown
            >
                {brands.map((item, index) => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
                ))}
            </Picker>
            <Picker
                selectedValue={selectedModelId}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedModelId(itemValue)}
                itemStyle={styles.pickerItem2} // Estiliza os itens do dropdown
            >
                {modelsInBrand.map((item, index) => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
                ))}
            </Picker>
            <Picker
                selectedValue={selectedVersion}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedVersionId(itemValue)}
                itemStyle={styles.pickerItem} // Estiliza os itens do dropdown
            >
                {versions.map((item, index) => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
                ))}
            </Picker>
            <TouchableOpacity style={styles.enterButton} onPress={handleNextStep}>
                <Text style={styles.enterButtonText}>Próximo</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SelectAutoScreen;
