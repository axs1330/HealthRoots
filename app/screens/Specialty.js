import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SectionList, StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity, Image, Button } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';

import colors from '../config/colors';
import universalStyles from '../config/styles';
const customData = require('../assets/HealthRoots.json');

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: Platform.OS === "android" ? 40 : 0
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 22,
    //   fontWeight: 'bold',
      backgroundColor: colors.primary,
      alignSelf: "center",
      borderRadius: 10
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
    
  })
  

const ViewSpecialty = ({ route, navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.sectionHeader, {backgroundColor: colors.secondary, marginBottom: 5}]}>
        <Text style={{fontSize: 30}}>{route.params.appointmentType}</Text>
        </View>
        <SectionList
          sections={[
            // {title: 'Past Appointments', data: ['Devin', 'Dan', 'Dominic']},
            // {title: 'Upcoming Appointments', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Past Appointments', data: customData.sort(function compare(a, b) { var dateA = new Date(a.date); var dateB = new Date(b.date); return dateA-dateB;}).filter((items) => {return new Date(items.date) < new Date()}).filter((items) => {return items.appointment_type == route.params.appointmentType})},
            {title: 'Upcoming Appointments', data: customData.sort(function compare(a, b) { var dateA = new Date(a.date); var dateB = new Date(b.date); return dateA-dateB;}).filter((items) => {return new Date(items.date) > new Date()}).filter((items) => {return items.appointment_type == route.params.appointmentType})},
          ]}
          renderItem={({item, index, section}) => 
            <View style={styles.itemContainer}>
                 <TouchableOpacity style={styles.itemContainer} activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('ViewAppointment', {appointment: item})
                }
                >
                <View style={styles.date}>
                    <Text style={{fontSize: 12}}>{new Intl.DateTimeFormat('en-US', {month: 'short'}).format(new Date(item.date))}</Text>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>{new Intl.DateTimeFormat('en-US', {day: 'numeric'}).format(new Date(item.date))}</Text>
                    <Text style={{fontSize: 12}}>{new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(new Date(item.date))}</Text>
                </View>
                </TouchableOpacity>
                <View  style={styles.itemDescription}>
                    <Text  style={{fontSize: 16}}>{item.appointment_type + ': ' + item.appointment_name}</Text>
                </View>
            </View>
            }
          renderSectionHeader={({section: {title}}) => <View style={[styles.sectionHeader, {marginTop: 5}]}><Text style={styles.sectionHeader}>{title}</Text></View>}
          keyExtractor={(item, index) => index}
        />
        <View style={universalStyles.homeButton}>
            <TouchableOpacity activeOpacity={0.5}
            onPress={() =>
                navigation.navigate('HomeScreen', {appointmentType: 'Jane'})
            }
            >
                {/* <Button
                    onPress={() =>
                        navigation.navigate('WelcomeScreen', {appointmentType: 'Jane'})
                    }
                /> */}
                <Image
                resizeMode="contain"
                source={require('../assets/home-2-line.png')}
                />
                {/* <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Login Using Facebook </Text> */}
            </TouchableOpacity>
        </View>
        <View style={universalStyles.newApptButton}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('NewAppointment', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>+ New Appt.</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
}


export default ViewSpecialty;