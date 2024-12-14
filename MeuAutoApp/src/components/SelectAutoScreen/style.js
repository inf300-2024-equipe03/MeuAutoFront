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
    picker: {
        height: 50,
        width: '90%', // Adiciona largura proporcional
        paddingHorizontal: 0,
        marginBottom: 120,
        borderWidth: 1, // Borda azul ao redor do Picker
        borderColor: '#007AFF',
        borderRadius: 20,
        color: '#007AFF', // Cor do texto no Picker
        backgroundColor: 'transparent', // Fundo branco para destacar
        justifyContent: 'center', // Centraliza o texto selecionado
    },
    pickerItem: {
        fontSize: 18,
        color: '#007AFF', // Cor dos itens do menu
        fontWeight: 'regular',
    },
    enterButton: {
        width: '60%',
        paddingVertical: 12,
        backgroundColor: '#0056B3',
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: -20,
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
