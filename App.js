import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeScreen from './app/screens/HomeScreen';
import Specialty from './app/screens/Specialty';
import WelcomeScreen from './app/screens/WelcomeScreen';
import UpcomingAppointments from './app/screens/UpcomingAppointments';
import ViewAllAppointments from './app/screens/ViewAllAppointments';
import ViewAppointment from './app/screens/ViewAppointment';
import NewAppointment from './app/screens/NewAppointment';
import {db} from './src/config';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Specialty" component={Specialty}/>
        <Stack.Screen name="UpcomingAppointments" component={UpcomingAppointments} />
        <Stack.Screen name="ViewAllAppointments" component={ViewAllAppointments} />
        <Stack.Screen name="ViewAppointment" component={ViewAppointment} />
        <Stack.Screen name="NewAppointment" component={NewAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//      export default function App() {
//       return <ViewAllAppointments />
//     }
//     </NavigationContainer>
//   );
// };

export default App;



// export default function App() {
//   return (
//     <View 
//       style={{
//         backgroundColor: "#fff", 
//         flex: 1,
//         justifyContent: "flex-end"
//       }}
//     >
//       <View 
//         style={{
//           backgroundColor: "#fff", 
//           flex: 8,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Image 
//           style={{flex: 1}}
//           resizeMode="center"
//           source={
//             require('./assets/PinClipart.com_short-clipart_353068.png')
//           }
//         />
//       </View>
//       <View 
//         style={{
//           backgroundColor: "#16c2d5", 
//           flex: 1
//         }}
//       />
//       <View 
//         style={{
//           backgroundColor: "#d7baad", 
//           flex: 1
//         }}
//       />
//     </View>

//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
