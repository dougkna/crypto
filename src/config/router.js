import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from '../components/Login/Login';
import SignupScreen from '../components/Screens/Signup';

import CryptoScreen from '../components/Screens/Crypto';
import CryptoDetailScreen from '../components/Screens/CryptoDetail';
import SearchScreen from '../components/Screens/Search';
import SettingScreen from '../components/Screens/Setting';

//This navigator is inside MainNavigator
const HomeNavigator = StackNavigator({
  Crypto: {
    screen: CryptoScreen,
    navigationOptions: {
      title: 'My Cryptos',
    },
  },
  CryptoDetail: {
    screen: CryptoDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.symbol}`,
    }),
  },
});

//This navigator is inside Main
const MainNavigator = TabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon 
        name='bitcoin-circle'
        type='foundation' 
        size={36} 
        color={tintColor} 
      />,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon
        name='magnifying-glass'
        type='foundation' 
        size={33} 
        color={tintColor} 
      />,
    },
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon
        name="account-circle" 
        size={33} 
        color={tintColor} 
      />
    },
  },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: false,
  }
});

//This is the parent navigator prior to login/signup
export const Auth = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      headerTitle: 'Signup',
    },
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});

//This is the parent navigator after login/signup
export const Main = StackNavigator({
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      headerTitle: 'Main',
    },
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});