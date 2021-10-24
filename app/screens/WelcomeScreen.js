import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'

import colors from '../config/colors';
import universalStyles from '../config/styles';


const WelcomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.background}>
            <Image
                style={styles.imageBackgroundLogo}
                resizeMode= 'contain'
                source={require('../assets/Logo.png')}>
                    
            </Image>
            <Image
                style={styles.imageBackground}
                resizeMode= 'contain'
                source={require('../assets/Welcome.png')}>
                    
            </Image>
            <View style={styles.caption}>
                               
                    <Text  style={{fontSize: 25, fontStyle: "italic", fontWeight: "bold", alignSelf: 'center', color: colors.primary, textAlign: 'center'}}>"Keeping you rooted to your care"</Text>
            </View>
            <View style={styles.getStarted}>
                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>
                    navigation.navigate('HomeScreen', {appointmentType: 'Jane'})
                }
                >
                    <Text  style={{fontSize: 20, fontWeight: "bold", alignSelf: 'center'}}>Get Started</Text>
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
        height: '80%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackgroundLogo: {
        position: 'absolute',
        // alignSelf: "center",
        height: '30%',
        width: '80%',
        top: 20,
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    caption: {
        padding: 10,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor: colors.primary,
        borderRadius: 30
    },
    getStarted: {
        padding: 10,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 75,
        width: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 30
    },
});


export default WelcomeScreen;

