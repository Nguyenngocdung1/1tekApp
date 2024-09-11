import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './src/components/settings';
import HomeScreen from './src/components/home';
import GameHub from './src/components/game-hub';
import History from './src/components/history';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyTabBar from './src/templates/tabBar';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        animation: 'fade',
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Game Hub') {
            iconName = 'rocket'
          } else {
            iconName = 'schedule'
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Game Hub" component={GameHub} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
