import React, { useState } from 'react'
import { Text, Button, Alert, StyleSheet, TouchableOpacity, View, Linking, Date } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Bootcamp',
    id: 'BC',
  }, 
  {
    item: 'Center Barre',
    id: 'CB',
  },
  {
    item: 'Core',
    id: 'CR',
  }, 
  {
    item: 'Cycle',
    id: 'CY',
  },
  {
    item: 'Hip Hop Fitness',
    id: 'HH',
  },
  {
    item: 'International Dance',
    id: 'ID',
  },
  {
    item: 'Interval Training',
    id: 'IT',
  },
  {
    item: 'Kickboxing',
    id: 'KB',
  },
  {
    item: 'Meditation',
    id: 'MD',
  },
  {
    item: 'Power Yoga',
    id: 'PY',
  },
  {
    item: 'Recovery Yoga',
    id: 'RY',
  },
  {
    item: 'Stadium Conditioning',
    id: 'SC',
  },
  {
    item: 'Swim Fit',
    id: 'SF',
  },
  {
    item: 'Total Body',
    id: 'TB',
  },
  {
    item: 'Vinyasa Yoga',
    id: 'VY',
  },
  {
    item: 'Yogalates',
    id: 'YL',
  },
]

function AddClass({navigation}) {
  const [selectedClass, setSelectedClass] = useState({})
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [classEntered, setClassEntered] = useState(false)
  const [dateEntered, setDateEntered] = useState(false)
  //const [incomplete, setIncomplete] = useState(true)
  const [dateText, setDateText] = useState("Select")
  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date)
    const dateTimeString = moment(date).format("dddd MM/DD/YY h:mma")
    setDateText(dateTimeString);
    setDateEntered(true);
    hideDatePicker();
  };

  const onChange = (val) => {
     setClassEntered(true)
     setSelectedClass(val)
  };


  const onClassSubmitted = () => {
    Alert.alert(
      "Class added!",
      JSON.stringify(selectedClass.item).substring(1, JSON.stringify(selectedClass.item).length-1) + "\n" + dateText,
      [
        { text: "OK",
         onPress: () => navigation.navigate({
            name: 'HomeScreen', 
            params: {className: "• " + selectedClass.item, dateAndTime: dateText},
            merge: true
         })
           
    }
      ]
    ); 
    //
   
  }

//   const checkComplete = () => {
//     if(classEntered && dateEntered){
//       setIncomplete(false)
//     }
//   }


  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontFamily: 'Arial', textAlign: 'center', paddingTop: 20, paddingBottom: 10 }}>Which class do you want to attend? </Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline', paddingBottom: 50}}
      onPress={() => Linking.openURL('https://recsports.ufl.edu/classes/')}>
  UF RecSports Calendar
</Text>
      </View>

      <SelectBox 
        label="Class Name"
        options={K_OPTIONS}
        labelStyle={{fontSize: 15, paddingBottom: 10, color: 'black'}}
        value={selectedClass}
        onChange={onChange}
        hideInputFilter={false}
        arrowIconColor='#489fb5'
        searchIconColor='#489fb5'
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 15, paddingBottom: 10, color: 'black' }}>Date/Time </Text>
      


      <View>
        
      <TouchableOpacity  style={{
            paddingTop: 8,
            paddingRight: 18,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"  }} onPress={showDatePicker}> 
      <Text style={{color: dateEntered ? 'black' : '#c7c7c7', fontSize: 18}}>{dateText}</Text>
        <Icon name="calendar" size={20} color="#489fb5"></Icon>
        </TouchableOpacity>
       


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
      />
    </View>

    <View
  style={{
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 10
  }}
/>

<View>
<TouchableOpacity
          style={{
            marginRight:40,
            marginLeft:40,
            marginTop:50,
            padding: 20,
            width: 200,
            alignSelf: 'center',
            borderRadius: 30,
           backgroundColor: 
    (dateEntered && classEntered) ? 
           '#4a4a4a' 
          : '#c7c7c7'
          }}
        onPress={ () => (classEntered && dateEntered) ? onClassSubmitted() : {} }
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>


</View>


    </View>
    
  )
//   function onChange() {
//     //setClassEntered(true)
//     return (val) => setSelectedTeam(val)
//   }
}

const styles = StyleSheet.create({
    
    buttonText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 15
    }
})


export default AddClass

