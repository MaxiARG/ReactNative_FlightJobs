/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Config from 'react-native-config';

const Drawer = createDrawerNavigator();

function HomeScreen() {

useEffect(() => {
  console.log(Config.URL_API)

})


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {Config.URL_API} </Text>
    </View> 
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
