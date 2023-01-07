import {View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Animatable.Image
        animation="pulse"
        easing="ease-in-out"
        duration={1000}
        iterationCount="infinite"
        source={require('../../assets/images/darklogo.png')}
        style={{marginTop: -100, width: 70, height: 70}}
      />
    </View>
  );
};

export default Loader;
