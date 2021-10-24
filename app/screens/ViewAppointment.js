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
        backgroundColor: colors.graylight,
        color: colors.black
      },
    inputLong: {
        height: 120,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        backgroundColor: colors.graylight,
        color: colors.black
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
        <Button title="Show Date Picker" onPress={showDatePicker} />
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
          editable={false}
          onChangeText={onChangeText}
          disabledInputStyle={{opacity: 1}}
          value={props.placeholder}
        />
       
    );
  };
  const UselessTextInputLong = (props) => {
    const [text, onChangeText] = React.useState(null);
    return (
        
        <TextInput
          style={styles.inputLong}
          disabled={true}
          editable={false}
          multiline={true}
          disabledInputStyle={{opacity: 1}}
          onChangeText={onChangeText}
          value={props.placeholder}
        />
       
    );
  };
  

const ViewAppointment = ({ route, navigation }) => {
    
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        
            <Text style={styles.sectionHeader}>Appointment Name</Text>
            <UselessTextInput placeholder={route.params.appointment.appointment_name}/>
            <Text style={styles.sectionHeader}>Appointment Type</Text>
            <UselessTextInput placeholder={route.params.appointment.appointment_type}/>
            <Text style={styles.sectionHeader}>Physician</Text>
            <UselessTextInput placeholder={route.params.appointment.physician}/>
            <Text style={styles.sectionHeader}>Date</Text>
            <UselessTextInput placeholder={new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(new Date(route.params.appointment.date))}/>
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
                    navigation.navigate('NewAppointment', {appointment: route.params.appointment})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={[universalStyles.newApptButton, {bottom: 115}]}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('HomeScreen', {appointment: route.params.appointment})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Delete</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
}


export default ViewAppointment;