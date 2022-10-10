import * as React from 'react';
import { StyleSheet, Text, Button, Header, View } from 'react-native';

function HomeScreen({navigation}){
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
    
      {/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    /> */}
      
    </View>

    )

}

export default HomeScreen