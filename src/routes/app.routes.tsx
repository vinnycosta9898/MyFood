import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { Feather, Ionicons } from '@expo/vector-icons';


type AppRoutes = {
  home: undefined;
  favorites: undefined;
  profile: undefined;
  reciepe: undefined
};

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export default function AppRoutes() {
  const { COLORS } = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#282A36',
          tabBarStyle: {
            backgroundColor: COLORS.gray_400,
            borderColor: COLORS.gray_400,
            height: Platform.OS === 'android' ? 72 : 96,
          },
        }}>
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />

        <Screen
          name="favorites"
          component={Home}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <Feather name="heart" size={size} color={color} />
            ),
          }}
        />

        <Screen
          name="profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-sharp"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="reciepe"
          component={Home}
          options={{
            tabBarButton: () => null
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
