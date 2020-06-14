import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';  

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import ProfileScreen from 'App/Containers/ProfileScreen/'
import AlertScreen from 'App/Containers/SendAlert/'
import ConfirmAlert from 'App/Containers/ConfirmAlert/'

import {ActiveTabColor, InactiveTabColor} from '../Theme/Colors.js'


const BottomStack = createBottomTabNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarLabel: (() => (<Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold', marginTop: 4}}> home </Text>)),
        tabBarIcon:(({focused}) => (<Icon name="ios-home" focused={focused} color={focused ? '#604acb' : InactiveTabColor} size={30} />))
      }
    },
    MainScreen: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: (() => (<Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold', marginTop: 4}}> avaliação </Text>)),
        tabBarIcon:(({focused}) => (<Icon name="ios-star" color="black" focused={focused} color={focused ? '#604acb' : InactiveTabColor} size={30}/>))
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: (() => (<Text style={{ fontSize: 14, alignSelf: 'center', fontWeight: 'bold', marginTop: 4}}> conta </Text>)),
        tabBarIcon:(({focused}) => (<Icon name="ios-person" color="black" focused={focused} color={focused ? '#604acb' : InactiveTabColor} size={30}/>))
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    tabBarOptions: { 
      swipeEnabled: true,
      animationEnabled: true,
      style: {
        elevation: 5,
        activeTintColor: ActiveTabColor,
        borderTopWidth: 16,
        borderTopColor: 'white',
        paddingTop: 3,
        paddingBottom: 7,
        height: 65,
        borderRadius: 10
      }
    }
  }
)

const Stack = createStackNavigator(
  {
    App: BottomStack,
    AlertScreen,
    ConfirmAlert

}, {
  initialRouteName: 'App',
  headerMode: 'none',
})

export default createAppContainer(Stack)
