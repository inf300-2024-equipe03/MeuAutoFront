import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',                      
        paddingTop: 20, // Espaçamento para acomodar o ícone no topo
        paddingBottom: 100,
    },
    subcontainer: {
        flexDirection: 'row', // Ícone e texto lado a lado
        alignItems: 'center',
        justifyContent: 'left',
        width: '90%',
        paddingVertical: 10,
        borderBottomWidth:5,
        borderBottomColor: '#ddd', // Divisão entre linhas
    },
    icon: {
        width: 93, // Tamanho pequeno para o ícone
        height: 32,
        position: 'absolute', // Posicionamento no canto superior esquerdo
        top: 70,
        left: 20,
    },
    iconLeft: {
        width: 80,
        height: 80,
        marginRight: 10, // Espaço entre o ícone e o texto
    },
    iconLeft2: {
        width: 40,
        height: 40,
        marginRight: 10, // Espaço entre o ícone e o texto
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
        fontSize: 30,
        alignSelf: 'left',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
        color: '#007AFF', // Azul consistente com o tema
    },
    subtitle: {
        fontSize: 20,
        alignSelf: 'left',
        marginLeft: 0,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 0,
        color: '#007AFF', // Azul consistente com o tema
    },
    text: {
        fontSize: 16,
        alignSelf: 'left',
        marginLeft: 0,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#007AFF', // Azul consistente com o tema
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
