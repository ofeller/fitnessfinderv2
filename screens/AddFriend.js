import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, TextInput, TouchableOpacity, View } from 'react-native';

function AddFriend(){
   // const [btnColor, setBtnColor] = useState('#c7c7c7');
   // const textEntered = () => {
    //    setBtnColor('#6b6b6b');
    //  };

    const [empty, setEmpty] = useState(true)

    const onChange = (text) => {

      if(text === ""){
        setEmpty(true)
      }
      else
        setEmpty(false)
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
          >
          
          <Text style={styles.buttonText}>Send Friend Request </Text>
    </TouchableOpacity>
   
   
    </View>

    )
}

const styles = StyleSheet.create({
    button:{
        
      },
      buttonText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      }
  })

export default AddFriend

