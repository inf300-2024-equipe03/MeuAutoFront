import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingTop: 20, // Espaçamento para acomodar o ícone no topo
        margin: 10,
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
        backgroundColor: '#337ab7', // Azul consistente com as telas anteriores
        width: '30%',
        alignSelf: 'left',
        marginTop: 100, // Espaço entre o ícone e o divisor
        marginLeft: 20, // Espaço entre o divisor e o texto
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 70,
        color: '#337ab7', // Azul consistente com o tema
    },
    enterButton: {
        width: '60%',
        paddingVertical: 12,
        backgroundColor: '#0056B3',
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 140,
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
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#337ab7',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 30,
        backgroundColor: '#fff',
        fontSize: 20, // Tamanho da fonte 
        fontColor: '#ffff', // Cor do texto
    }
});
