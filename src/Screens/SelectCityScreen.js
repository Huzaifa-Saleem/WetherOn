import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const SelectCityScreen = () => {
  //states
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  //functions
  const handleCityChange = () => {
    if (city === '') {
      alert('Please Enter City Name');
      return;
    }

    AsyncStorage.setItem('city', city);
    navigation.navigate('HomeDrawer');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/darklogo.png')}
        style={{width: '20%', height: '20%', resizeMode: 'contain'}}
      />
      <Text style={styles.text1}>---------</Text>

      <TextInput
        placeholder="Enter City Name"
        style={styles.input}
        onChangeText={text => {
          setCity(text);
        }}
      />
      <TouchableOpacity style={styles.btn} onPress={handleCityChange}>
        <Text
          style={{
            color: '#FBF7F1',
            textAlign: 'center',
            padding: 14,
            textAlignVertical: 'center',
            fontSize: 16,
          }}>
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectCityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF7F1',
  },
  text1: {
    color: '#262B26',
    textAlign: 'center',
    padding: 14,
    textAlignVertical: 'center',
    fontSize: 14,
    marginTop: 0,
  },
  input: {
    width: '80%',
    height: 50,
    //   backgroundColor: '',
    borderRadius: 4,
    marginTop: 0,
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'center',
    elevation: 1,
    borderWidth: 0.4,
    borderColor: '#262B26',
  },
  btn: {
    width: '40%',
    backgroundColor: '#262B26',
    borderRadius: 4,
    marginTop: 20,
    textAlign: 'center',
    elevation: 1,
  },
});
