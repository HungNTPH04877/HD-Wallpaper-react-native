import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import ImageDetails from './screen/ImageDetails';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Login Screen', headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#00a0ea',
            },
            headerStatusBarHeight:20,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:25
            },
          }} />

        <Stack.Screen
        
          name='Wallpaper'
          component={ProfileScreen}
          options={{
            title: 'Wallpaper Page', headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#00a0ea',
            },
            headerStatusBarHeight:20,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:20
            },
          }}
          />

        <Stack.Screen
          name='Image'
          component={ImageDetails}
          options={{
            title: 'Wallpaper Details', headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#00a0ea',
            },
            headerStatusBarHeight:20,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize:20
            },
          }}
           />


      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
