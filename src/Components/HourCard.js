import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';

const HourCard = props => {
  const {temp, text, day} = props;
  return (
    <View
      style={{
        width: 50,
        padding: 6,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.secondary,
        height: 100,
        margin: 5,
      }}>
      <Text style={styles.text}>{temp}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>--------</Text>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
};

export default HourCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    fontWeight: '200',
    textAlign: 'center',
  },
});
