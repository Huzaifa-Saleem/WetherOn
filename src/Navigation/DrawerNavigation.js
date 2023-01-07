import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';
import Home from '../Screens/Home';

import CustomDrawer from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShadow: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerShown: false,

          drawerActiveTintColor: '#42A318',
          headerTitle: '',

          drawerStyle: {
            backgroundColor: '#fff',
            width: 300,
          },
          // drawerActiveBackgroundColor: '#fff',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({focused, size}) => (
              <Image
                resizeMode="contain"
                style={{width: 24, height: 24}}
                source={require('../../assets/images/logo.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Services"
          component={Home}
          options={{
            drawerIcon: ({focused, size}) => (
              <Image
                resizeMode="contain"
                style={{width: 24, height: 24}}
                source={require('../../assets/images/logo.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Products"
          component={Home}
          options={{
            drawerIcon: ({focused, size}) => (
              <Image
                resizeMode="contain"
                style={{width: 24, height: 24}}
                source={require('../../assets/images/logo.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact Us"
          component={Home}
          options={{
            drawerIcon: ({focused, size}) => (
              // <SimpleLineIcons
              //   name="screen-smartphone"
              //   size={size}
              //   color="#42A318"
              // />
              <Image
                resizeMode="contain"
                style={{width: 24, height: 24}}
                source={require('../../assets/images/logo.png')}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigation;

const DrawerContent = props => {
  <Image
    resizeMode="contain"
    source={require('../../assets/images/logo.png')}
    style={{width: 100, height: 100}}
  />;
};
