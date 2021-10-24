import React from 'react';
import { StyleSheet } from 'react-native'

import colors from '../config/colors';

const universalStyles = StyleSheet.create({
    newApptButton: {
        padding: 10,
        position: 'absolute',
        right: 20,
        bottom: 70,
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center'
    },
    homeButton: {
      padding: 10,
      position: 'absolute',
      right: 20,
      bottom: 20,
      justifyContent: "center",
      backgroundColor: colors.primary,
      borderRadius: 1000
    }
  })

  export default universalStyles;
