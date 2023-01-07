import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import SelectCityScreen from '../Screens/SelectCityScreen';
import Home from '../Screens/Home';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />
        <Stack.Screen name="HomeDrawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
