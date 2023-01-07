import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
export default function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/darklogo.png')}
          style={{height: 110, width: 110, marginLeft: 20}}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
