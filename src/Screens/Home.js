import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Colors} from '../Theme/Colors';
import HourCard from '../Components/HourCard';
import DayCard from '../Components/DayCard';
import Loader from '../Components/Loader';
import Header from '../Components/Header';

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  //get city name from async storage
  const getWeather = async () => {
    const city = await AsyncStorage.getItem('city');
    console.log('adssasdasdasdasds', city);
  };
  getWeather();

  //calling api to get weather data
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=91dc3d035b434511949151334230601&q=${'ryk'}&days=10&aqi=no&alerts=yes`,
        )
        .then(res => {
          setData(res.data);
          setLoading(false);
          //   console.log(res.data);
        })
        .catch(err => {
          console.log(
            '🚀 ~ file: Home.js:21 ~ const{data}=axios.get ~ err',
            err,
          );
        });
    };
    getData();
  }, []);

  console.log(
    'helo world---------------------->',
    data?.forecast.forecastday[0].day,
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={{flex: 1, backgroundColor: Colors.primary}}>
          <Header />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 60,
                marginTop: 20,
                color: Colors.secondary,
                fontFamily: 'Poppins-Bold',
                fontWeight: '200',
              }}>
              {Math.round(data?.current.temp_c)}°
            </Text>
            <Text
              style={{
                fontSize: 30,
                marginTop: -5,
                color: Colors.secondary,
                fontFamily: 'Poppins-Bold',
                fontWeight: '200',
              }}>
              {data?.current.condition.text}
            </Text>
          </View>

          {/* hour card */}
          <View
            style={{
              flex: 1,
              marginTop: 20,
              marginBottom: -100,
            }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              alwaysBounceHorizontal={true}
              data={data?.forecast.forecastday[0].hour}
              snapToAlignment={'start'}
              //   snapToInterval={50}
              style={{
                height: 100,
                // backgroundColor: 'red',
                marginHorizontal: 30,
              }}
              renderItem={({item}) => (
                <HourCard
                  temp={Math.round(item.temp_c) + '°'}
                  text={item.condition.text}
                  day={item.time.split(' ')[1]}
                />
              )}
              keyExtractor={item => item.time}
            />
          </View>

          {/* day card */}
          <View
            style={{
              marginTop: -20,
              marginBottom: 0,
              flex: 1,
              //   backgroundColor: 'red',
            }}>
            <ScrollView>
              {data?.forecast.forecastday.map((item, index) => {
                return (
                  <DayCard
                    mintemp={Math.round(item.day.mintemp_c) + '°'}
                    maxtemp={Math.round(item.day.maxtemp_c) + '°'}
                    text={item.day.condition.text}
                    day={item.date}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
};

export default Home;
