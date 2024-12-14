import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 100,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    carIcon: {
        width: 93,
        height: 32,
        position: 'absolute',
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
        backgroundColor: '#337ab7',
        width: '30%',
        alignSelf: 'left',
        marginTop: 100,
        marginLeft: 20,
        borderRadius: 10,
    },
    map: {
        width: '100%', // Full width of the container
        height: 300, // Example fixed height
        marginVertical: 20, // Space above and below the map
    },
    enterButton: {
        width: '60%',
        paddingVertical: 12,
        backgroundColor: '#0056B3',
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    enterButtonText: {
        color: '#FFFF',
        fontSize: 18,
        fontWeight: 'regular',
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 0,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderColor: '#f0f0f0',
    },
    textBox: {
        width: '120%',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        borderColor: '#337ab7',
        fontSize: 20,
        borderWidth: 2,
        padding: 10,
        marginVertical: 10,
        lineHeight: 30,
    },
});