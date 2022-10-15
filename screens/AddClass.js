import React, { useState } from 'react'
import { Text, Button, View, Linking } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import DateTimePickerModal from "react-native-modal-datetime-picker";


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

function Test() {
  const [selectedTeam, setSelectedTeam] = useState({})

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };


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
        labelStyle={{fontSize: 15, paddingBottom: 10, color: 'gray'}}
        
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
        arrowIconColor='#489fb5'
        searchIconColor='#489fb5'
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 15, paddingBottom: 10, color: 'gray' }}>Date </Text>
      


      <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={true}
      />
    </View>


    </View>
  )
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default Test

