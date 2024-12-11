import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingTop: 20, // Espaçamento para acomodar o ícone no topo
    },
    icon: {
        width: 93, // Tamanho pequeno para o ícone
        height: 32,
        position: 'absolute', // Posicionamento no canto superior esquerdo
        top: 70,
        left: 20,
    },
    divider: {
        height: 5,
        backgroundColor: '#007AFF', // Azul consistente com as telas anteriores
        width: '30%',
        alignSelf: 'left',
        marginTop: 100, // Espaço entre o ícone e o divisor
        marginLeft: 20, // Espaço entre o divisor e o texto
        borderRadius: 10,
    },
    title: {
        fontSize: 40,
        alignSelf: 'left',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        color: '#007AFF', // Azul consistente com o tema
    },
    picker: {
        marginTop: 100,
        height: 60,
        width: 250,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#007AFF', // Borda azul
        borderRadius: 8,
        color: '#007AFF', // Texto azul
    },
});
