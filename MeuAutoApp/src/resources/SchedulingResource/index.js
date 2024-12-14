import api from "../../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SchedulingResource = {
    createScheduling: async (repairShopId, datetime) => {
        // Recupera o token do AsyncStorage
        const token = await AsyncStorage.getItem('TOKEN');

        // Faz a requisição POST com o cabeçalho Authorization
        return await api.post(
            '/scheduling',  // Endereço da API
            { repairShopId, datetime },  // Corpo da requisição
            { 
                headers: {
                    Authorization: `Bearer ${token}`,  // Cabeçalho com o token
                }
            }
        );
    },
};

export default SchedulingResource;
