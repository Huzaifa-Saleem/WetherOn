import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
      }}>
      <TouchableOpacity onPress={handleDrawer}>
        <Image
          source={require('../../assets/images/burgerIconlight.png')}
          width="20%"
          height="20%"
          style={{width: 26, height: 20, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          marginTop: 0,
          color: Colors.secondary,
          fontFamily: 'Poppins-Bold',
          fontWeight: '200',
        }}>
        {/* {data?.location.region} */}
        Rahim Yar Khan
      </Text>
      <Image
        source={require('../../assets/images/logo.png')}
        width="20%"
        height="20%"
        style={{width: 35, height: 35, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Header;
