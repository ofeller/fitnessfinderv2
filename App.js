import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
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
        options={{
          headerTitle: "FitnessFinder",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: '500',
            fontFamily: 'Tahoma',
            letterSpacing: 5,
            color: '#489fb5'
          },
          headerStyle: {
            height: 96

          },
          // headerRight: () => (
          //   <Button
          //   title="Add a friend"
          //   onPress={() => navigation.navigate('AddFriend')}
              
          //   />
          // )

        }} />
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
