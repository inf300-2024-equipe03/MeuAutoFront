import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',                      
        paddingTop: 20, // Espaçamento para acomodar o ícone no topo
        paddingBottom: 20,
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
        textAlign: 'center',
        justifyContent: 'center',
        color: '#337ab7',
        marginVertical: 20,
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
    divider: {
        height: 5,
        backgroundColor: '#337ab7', // Azul consistente com as telas anteriores
        width: '30%',
        alignSelf: 'left',
        marginTop: 100, // Espaço entre o ícone e o divisor
        marginLeft: 20, // Espaço entre o divisor e o texto
        borderRadius: 10,
    },
    scrollView: {
        flex: 1,
        width: '80%',
    },
    autoshopsItem: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2, 
    },
    autoshopsText: {
        fontSize: 16,
        marginBottom: 4,
    },
});