import React from 'react';
import { StatusBar, StyleSheet ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';


import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SaveSceen from '../screens/SaveSceen';
import CategoryScreen from '../screens/CategoryScreen';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown : false,}}>
      <HomeStack.Screen name="HomeSreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="DetailScreens" component={DetailsScreen} />
      <HomeStack.Screen name="CategoryScreen" component={CategoryScreen} />
    </HomeStack.Navigator>
  );
}

function BottomBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          //bottom:20,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e91e63' : '#748c94',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={SaveSceen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/bookmark.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e91e63' : '#748c94',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default function Tabs() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <BottomBar />
    </NavigationContainer>
  );
}
