import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Degradê será aplicado no componente, não no estilo diretamente
    paddingHorizontal: 20, // Garante espaçamento lateral
  },
  googleButton: {
    width: '90%',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000', // Sombras para o botão
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Sombras no Android
  },
  emailButton: {
    width: '90%',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  enterButton: {
    width: '90%',
    paddingVertical: 12,
    backgroundColor: '#0056B3',
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  emailButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  enterButtonText: {
    color: '#FFF', // Cor do texto no botão "Entrar"
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});