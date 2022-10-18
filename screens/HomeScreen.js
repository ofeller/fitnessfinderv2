

import * as React from 'react';
import { StyleSheet, Text, Button, Header, View } from 'react-native';
import { useRoute } from '@react-navigation/native';



function HomeScreen({route, navigation}){

    const { className, dateAndTime } = route.params;
    



    return(
    <View style={{alignItems: 'left', paddingVertical: 40, paddingHorizontal: 30}}>

     
    <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '600', paddingBottom: 5}}>My Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•Vinyasa Yoga</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 15}}>   Friday 10/21/22 4:00pm</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•Kickboxing</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: className === '' ? 0 : 15}}>   Monday 10/24/22 5:00pm</Text>
        {/* user entered class */}

        <Text style= {{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: className === '' ? 10 : 50}}>
      {JSON.stringify(className).substring(1, JSON.stringify(className).length-1 )}{"\n   "}
         {JSON.stringify(dateAndTime).substring(1, JSON.stringify(dateAndTime).length-1 )}
         </Text>

 

      
      

    <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '600', paddingBottom: 5}}>Omar's Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•Total Body</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 50}}>   Tuesday 10/25/22 5:00pm</Text>
    <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '600', paddingBottom: 5}}>Steven's Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•Kickboxing</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 15}}>   Monday 10/24/22 10:30am</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•Cycle</Text>
    <Text style={{fontSize: 18, fontFamily: 'Arial', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>   Tuesday 10/25/22 6:00pm</Text>
    
      {/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    /> */}
      
    </View>

    )

}

export default HomeScreen