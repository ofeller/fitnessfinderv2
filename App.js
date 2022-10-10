import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import AddFriend from './screens/AddFriend';
import AddClass from './screens/AddClass';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: "FitnessFinder",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: '500',
            fontFamily: 'Tahoma',
            color: '#489fb5'
          },
          headerStyle: {
            height: 96

          },
          headerRight: () => (
            <Icon name="user-plus" size={28} color="#303030" onPress={() => navigation.navigate('AddFriend')} />),
          headerLeft: () => (
            <Icon name="calendar-plus" size={30} color="#303030" onPress={() => navigation.navigate('AddClass')} />) 
        })} />
        <Stack.Screen 
        name="AddClass" 
        component={AddClass} 
        options={{
          headerBackTitle: "Back",
        
        
          }}
        />
        <Stack.Screen 
        name="AddFriend" 
        component={AddFriend}
        options={{
          headerBackTitle: "Back",
          }}  />
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
