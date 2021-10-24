import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'

import colors from '../config/colors';
import universalStyles from '../config/styles';


const customData = require('../assets/HealthRoots.json');


const HomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.background}>
            <Image
                style={styles.imageBackground}
                resizeMode= 'contain'
                source={require('../assets/DefaultCartoon.png')}>
                    
            </Image>
            <View style={universalStyles.newApptButton}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('NewAppointment', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>+ New Appt.</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewApptButton}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('ViewAllAppointments', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Appt. History</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.upcomingAppt}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('UpcomingAppointments', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontWeight: "bold", fontSize: 16, textAlign: 'center', paddingBottom: 5}}>UPCOMING</Text>
                    {customData.sort(function compare(a, b) { var dateA = new Date(a.date); var dateB = new Date(b.date); return dateA-dateB;}).filter((items) => {return new Date(items.date) > new Date()}).map((item, index) => {
                    return (<Text style={{paddingBottom: 5}}>{item.appointment_type} on {new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric'}).format(new Date(item.date))} at {item.location}</Text>) 
                })}
                </TouchableOpacity>
            </View>
            <View style={styles.nameBio}>
                <View style={{marginBottom:0}}>
                <Image style={{alignSelf: 'center', padding: 10, width: '100%', height: '110%'}} resizeMode= 'contain' source={require('../assets/Logo.png')}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image style={{alignSelf: 'center', marginRight: 10}} resizeMode= 'contain' source={require('../assets/user-fill.png')}/>
                    <Text  style={{fontSize: 25,alignSelf: 'center'}}>Hi Raghav!</Text>
                </View>
            </View>



            <View style={[styles.specialty, {right: 10, top: 190}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 25, top: -40}} resizeMode= 'contain' source={require('../assets/eye.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Ophthalmology'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Ophthalmology</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {right: 20, top: 350}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 40, top: -50}} resizeMode= 'contain' source={require('../assets/heart.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Cardiology'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Cardiology</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {right: 40, bottom: 200}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 40, top: -50}} resizeMode= 'contain' source={require('../assets/foot.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Podiatry'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Podiatry</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {left: 20, bottom: 200}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 25, top: -40}} resizeMode= 'contain' source={require('../assets/bone.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Orthopedics'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Orthopedics</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {left: 40, top: 350}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 30, heigh: 40, top: -55}} resizeMode= 'contain' source={require('../assets/tooth.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Dental'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Dental</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {left: 30, top: 190}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 40, top: -60}} resizeMode= 'contain' source={require('../assets/brain.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Neurology'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Neurology</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.specialty, {top: 130}]}>
            <Image style={{alignSelf: 'center', marginRight: 10, position: 'absolute', width: 40, heigh: 30, top: -40}} resizeMode= 'contain' source={require('../assets/PC.png')}/>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('Specialty', {appointmentType: 'Primary Care'})
                }
                >
                    <Text  style={{fontWeight: "bold"}}>Primary Care</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        position: 'absolute',
        // alignSelf: "center",
        height: '60%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    viewApptButton: {
        padding: 10,
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    upcomingAppt: {
        padding: 10,
        position: 'absolute',
        left: 20,
        bottom: 20,
        height: 120,
        width: 220,
        backgroundColor: colors.tertiary,
        borderRadius: 10,
        // borderWidth: 2,
        overflow: 'hidden'
    },
    nameBio: {
        padding: 0,
        position: 'absolute',
        alignSelf: 'center',
        top: -5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
    },
    specialty: {
        padding: 10,
        position: 'absolute',
        backgroundColor: colors.primary,
        color: colors.white,
        borderRadius: 10,
        // borderWidth: 2,
    },
});


export default HomeScreen;

