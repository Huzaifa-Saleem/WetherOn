import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';

const DayCard = props => {
  const {day, text, mintemp, maxtemp} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
        borderWidth: 0.9,
        borderRadius: 6,
        marginHorizontal: 30,
        marginVertical: 5,
        borderColor: Colors.secondary,
      }}>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
          fontWeight: '200',
          textAlign: 'center',
        }}>
        {day}
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
          fontWeight: '200',
          textAlign: 'center',
        }}>
        {text}
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
          fontWeight: '200',
          textAlign: 'center',
        }}>
        {mintemp}
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontSize: 14,
          fontFamily: 'Roboto-Bold',
          fontWeight: '200',
          textAlign: 'center',
        }}>
        {maxtemp}
      </Text>
    </View>
  );
};

export default DayCard;
