import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',                      
        paddingTop: 20, // Espaçamento para acomodar o ícone no topo
        paddingBottom: 100,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    carIcon: {
        width: 93, // Tamanho pequeno para o ícone
        height: 32,
        position: 'absolute', // Posicionamento no canto superior esquerdo
        top: 70,
        left: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#337ab7',
        marginVertical: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        elevation: 5,
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    icon2: {
        width: 100,
        height: 60,
        marginBottom: 10,
    },
    gridLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#337ab7',
        textAlign: 'center',
    },
    divider: {
        height: 5,
        backgroundColor: '#337ab7', // Azul consistente com as telas anteriores
        width: '30%',
        alignSelf: 'left',
        marginTop: 100, // Espaço entre o ícone e o divisor
        marginLeft: 20, // Espaço entre o divisor e o texto
        borderRadius: 10,
    },
    enterButton: {
        width: '60%',
        paddingVertical: 12,
        backgroundColor: '#0056B3',
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 90,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    enterButtonText: {
        color: '#FFFF', // Cor do texto no botão "Entrar"
        fontSize: 18,
        fontWeight: 'regular',
    },
});