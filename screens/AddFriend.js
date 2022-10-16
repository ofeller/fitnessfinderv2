import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Alert, TouchableOpacity, Button, TextInput, View } from 'react-native';
//import 'react-native-gesture-handler';
function AddFriend({navigation}){
   // const [btnColor, setBtnColor] = useState('#c7c7c7');
   // const textEntered = () => {
    //    setBtnColor('#6b6b6b');
    //  };

    const [empty, setEmpty] = useState(true)
    const [username, setUsername] = useState('')

    const onChange = (text) => {
      if(text === ""){
        setEmpty(true)
      }
      else{
        setEmpty(false)
      }
      setUsername(text)
    }

    const onFriendRequest = () => {
    Alert.alert(
      "Request sent!",
      "Username: " + username + "\nName: Olivia F.",
      [
        { text: "OK", onPress: () => navigation.navigate('HomeScreen', {param: username}) }
      ]
    ); 
    //
   
  }



    // const onChangeText = () => {
    //   setTextEntered(true)
    // }
    return(
    <View style={{alignItems: 'center', padding: 20, paddingTop: 40 }}>
    {/* <Text style={{fontSize: 20, fontFamily: 'Arial', fontWeight: '400', paddingBottom: 5}}>Add a friend</Text> */}
    
    <TextInput
          style={{ height: 40, width: "95%", borderColor: 'gray', borderWidth: 1,  borderRadius: 10, height: 50, marginBottom: 20, padding: 10}}
          placeholder ="Enter a username"
          value = {username}
          onChangeText={text => onChange(text)}
        />
    <TouchableOpacity
          style={{
            marginRight:40,
            marginLeft:40,
            marginTop:5,
            padding: 20,
            borderRadius: 30,
            backgroundColor: empty ? '#c7c7c7' : '#4a4a4a'
          }}
          onPress={ () => empty ? { } : onFriendRequest() }
          >

          <Text style={styles.buttonText}>Send Friend Request </Text>
    </TouchableOpacity>
   
   
    </View>

    )
}

const styles = StyleSheet.create({
    
      buttonText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      }
  })

export default AddFriend

