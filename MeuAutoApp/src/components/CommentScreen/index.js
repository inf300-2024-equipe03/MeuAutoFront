import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './style';

const CommentScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require('../../../assets/auto-icon.png')} style={styles.carIcon} />
        <View style={styles.divider} />
        <Text style={styles.title}>Observações</Text>

        <TextInput
          style={styles.textBox}
          placeholder="Há algo que você gostaria de informar a oficina? Digite aqui..."
          multiline
          numberOfLines={50}
        />

        <TouchableOpacity 
          style={styles.enterButton}
          onPress={() => navigation.navigate('ReviewScreen')}
        >
          <Text style={styles.enterButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentScreen;