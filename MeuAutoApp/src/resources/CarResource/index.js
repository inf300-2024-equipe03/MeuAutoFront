import api from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarResource = {
    findCarByUser: async () => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        // Faz a requisição GET com o cabeçalho Authorization
        return await api.get('/car', {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    findBrands: async () => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        return await api.get('/car/brands', {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    findModelsByBrandId: async (brandId) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        return await api.get(`/car/brands/${brandId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    findVersionByBrandAndModel: async (brandId, modelId) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        return await api.get(`/car/brands/${brandId}/model/${modelId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    getCar: async (brandId, modelId, versionId) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        return await api.get(`/car/brands/${brandId}/model/${modelId}/version/${versionId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    createCar: async (value, brand, modelName, year, fuel) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');
        // Faz a requisição POST com o cabeçalho Authorization
        return await api.post(
            '/car',  // Endereço da API
            { 
                value,
                brand,
                modelName,
                year,
                fuel
            },  // Corpo da requisição
            { 
                headers: {
                    Authorization: `Bearer ${token}`,  // Cabeçalho com o token
                }
            }
        );
    },

};

export default CarResource;