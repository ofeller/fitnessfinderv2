import * as React from 'react';
import { StyleSheet, Text, Button, Header, View } from 'react-native';

function HomeScreen({navigation}){
    return(
    <View style={{alignItems: 'left',  justifyContent: 'left', paddingVertical: 40, paddingHorizontal: 30}}>
    <Text style={{fontSize: 20, fontFamily: 'Tahoma', fontWeight: '600', paddingBottom: 5}}>My Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Tahoma', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•10/24 Yoga (75) 8:00pm</Text>
    <Text style={{fontSize: 18, fontFamily: 'Tahoma', fontWeight: '400', paddingLeft: 20, paddingBottom: 40}}>•10/25 Total Body (45) 5:00pm</Text>
    <Text style={{fontSize: 20, fontFamily: 'Tahoma', fontWeight: '600', paddingBottom: 5}}>Omar's Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Tahoma', fontWeight: '400', paddingLeft: 20, paddingBottom: 40}}>•10/24 Recovery Yoga (75) 8:00pm</Text>
    <Text style={{fontSize: 20, fontFamily: 'Tahoma', fontWeight: '600', paddingBottom: 5}}>Steven's Classes</Text>
    <Text style={{fontSize: 18, fontFamily: 'Tahoma', fontWeight: '400', paddingLeft: 20, paddingBottom: 5}}>•10/24 Recovery Yoga (75) 8:00pm</Text>
    <Text style={{fontSize: 18, fontFamily: 'Tahoma', fontWeight: '400', paddingLeft: 20, paddingBottom: 40}}>•10/25 Total Body (45) 5:00pm</Text>
    
      {/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    /> */}
      
    </View>

    )

}

export default HomeScreen