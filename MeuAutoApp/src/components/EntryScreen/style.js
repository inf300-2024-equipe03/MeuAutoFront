import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Distribui os elementos com espaço entre eles
    alignItems: 'center',
    backgroundColor: '#007AFF', // Fundo azul
    paddingVertical: 20, // Espaço extra para evitar elementos fora da tela
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 120, // Adiciona um espaço na parte superior
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20, // Espaço menor para o subtítulo
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center', // Garante o alinhamento horizontal,
    marginBottom: 60, // Espaço inferior para afastar da borda da tela
  },
  button: {
    backgroundColor: '#00A6FF',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 40, // Espaço inferior para afastar da borda da tela
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
