import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

const SelectdateScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());

  const { autoshopsId } = route.params;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../../assets/auto-icon.png')} 
        style={styles.carIcon} 
      />
      <View style={styles.divider} />
      <Text style={styles.title}>Quando?</Text>

      {/* Calendário */}
      <DateTimePicker
        testID="datePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.dateTimePicker}
      />

      {/* Seleção de Hora */}
      <DateTimePicker
        testID="timePicker"
        value={date}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.dateTimePicker}
      />

      <Text style={styles.selectedDateTime}>Data Selecionada: {date.toLocaleDateString()}</Text>
      <Text style={styles.selectedDateTime}>Hora Selecionada: {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

      <TouchableOpacity 
                style={styles.enterButton}
                onPress={() => navigation.navigate('CommentScreen', { autoshopsId, date: date.toISOString()})}
            >
                <Text style={styles.enterButtonText}>Próximo</Text>
        </TouchableOpacity>

    </View>
  );
};

export default SelectdateScreen;
