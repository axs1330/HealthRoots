import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SectionList, StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, Image, Button, TextInput, ScrollView } from 'react-native';

import colors from '../config/colors';
import appointmentTypes from '../config/appointmentTypes';
import universalStyles from '../config/styles';
import {db} from '../../src/config';
import 'intl';
import 'intl/locale-data/jsonp/en';
const customData = require('../assets/HealthRoots.json');

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: Platform.OS === "android" ? 40 : 0,
     paddingBottom: 10
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 22,
    //   fontWeight: 'bold',
      backgroundColor: colors.secondary,
    },
    itemContainer: {
      padding: 10,
      fontSize: 18,
      flexDirection: "row",
      alignItems: "center",
      height: 80,
    },
    date: {
      padding: 10,
      fontSize: 20,
      backgroundColor: colors.gray,
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: 1000
    },
    itemDescription: {
      padding: 10,
      fontSize: 20,
      flex: 3,
      height: 40,
      justifyContent: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    inputLong: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top'
      },
  })

  const Example = () => {
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
      <View>
        <View  style={styles.itemDescription}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={showDatePicker}>
                <Text  style={{fontSize: 16}}>{new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(new Date())}</Text>
                </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };


  const UselessTextInput = (props) => {
    const [text, onChangeText] = React.useState(null);
    return (
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={props.placeholder}
        />
       
    );
  };
  const UselessTextInputLong = (props) => {
    const [text, onChangeText] = React.useState(null);
    return (
        
        <TextInput
          style={styles.inputLong}
          multiline={true}
          onChangeText={onChangeText}
          value={props.placeholder}
        />
       
    );
  };
  

const NewAppointment = ({ route, navigation }) => {
    if (route.params.appointment == undefined) {route.params.appointment =  {"id": Math.max(...customData.map(o=>o.id))+1,"appointment_name":"Regular Check-up","appointment_type":"","physician":"","date":"","time":"14:39","location":"Presbyterian","notes":"","follow-up":"1-month"}}
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        
            <Text style={styles.sectionHeader}>Appointment Name</Text>
            <UselessTextInput placeholder={route.params.appointment.appointment_name}/>
            <Text style={styles.sectionHeader}>Appointment Type</Text>
            

            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                {appointmentTypes.map((item, index) => {
                    return (<Picker.Item label={item} value={index} key={index}/>) 
                })}
            </Picker>
            <Text style={styles.sectionHeader}>Physician</Text>
            <UselessTextInput placeholder={route.params.appointment.physician}/>
            <Text style={styles.sectionHeader}>Date</Text>
            <Example/>
            <Text style={styles.sectionHeader}>Location</Text>
            <UselessTextInput placeholder={route.params.appointment.location}/>
            <Text style={styles.sectionHeader}>Notes</Text>
            <UselessTextInputLong placeholder={route.params.appointment.notes}/>
            <Text style={styles.sectionHeader}>Follow-up</Text>
            <UselessTextInput placeholder={route.params.appointment['follow-up']}/>
          
        </ScrollView>
        <View style={universalStyles.homeButton}>
            <TouchableOpacity activeOpacity={0.5}
            onPress={() =>
                navigation.navigate('HomeScreen', {appointmentType: 'Jane'})
            }
            >
                <Image
                resizeMode="contain"
                source={require('../assets/home-2-line.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={universalStyles.newApptButton}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('HomeScreen', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Save</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
}


export default NewAppointment;