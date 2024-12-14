import { React, useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './style';

const CommentScreen = ({ navigation, route }) => {

  const { autoshopsId, date } = route.params;
  const [comment, setComment] = useState('');

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
          onChangeText={setComment}
        />

        <TouchableOpacity 
          style={styles.enterButton}
          onPress={() => navigation.navigate('ReviewScreen', { autoshopsId, date, comment })}
        >
          <Text style={styles.enterButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentScreen;