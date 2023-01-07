import {View, Text, Image} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.replace('SelectCityScreen');
  }, 2000);

  return (
    <View
      style={{
        backgroundColor: '#262B26',
        display: 'flex',
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Animatable.Image
        animation="fadeInUpBig"
        easing="ease-in-out"
        duration={1000}
        source={require('../../assets/images/logo.png')}
        style={{marginTop: -100, width: 70, height: 70}}
      />
      <Animatable.Text
        animation="fadeInUpBig"
        easing="ease-in-out"
        duration={1000}
        style={{
          color: 'white',
          position: 'absolute',
          bottom: 40,
          fontSize: 16,
        }}>
        WetherOn
      </Animatable.Text>
    </View>
  );
};

export default SplashScreen;
