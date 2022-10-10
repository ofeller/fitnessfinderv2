import * as React from 'react';
import { StyleSheet, Text, Button, Header, View } from 'react-native';

function HomeScreen({navigation}){
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
    <Button
        title="Add a class"
        onPress={() => navigation.navigate('AddClass')}
      />
      <Button
        title="Add a friend"
        onPress={() => navigation.navigate('AddFriend')}
      />
      {/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    /> */}
      
    </View>

    )

}

export default HomeScreen