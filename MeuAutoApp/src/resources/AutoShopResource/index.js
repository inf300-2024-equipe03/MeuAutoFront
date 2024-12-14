import api from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AutoShopResource = {
    findAutoShops: async (location) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        // Faz a requisição GET com o cabeçalho Authorization
        return await api.get(`/car_repair_shop?location=${location}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },

    findAutoShopById: async (id) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');
        // Faz a requisição GET com o cabeçalho Authorization
        return await api.get(`/car_repair_shop/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token no header
            }
        });
    },
};

export default AutoShopResource;