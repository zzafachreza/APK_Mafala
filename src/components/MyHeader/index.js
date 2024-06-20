import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { MyDimensi, colors, fonts, windowWidth } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { getData } from '../../utils/localStorage';
import MyMenu from '../MyMenu';
export default function MyHeader({ onPress, langkah, judul }) {

  return (


    <View style={{
      flexDirection: 'row',
      backgroundColor: colors.secondary,
      padding: 5,
      height: 60,
      marginBottom: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      alignItems: 'center',
      borderBottomWidth: 0,
      borderBottomColor: colors.border,
    }}>
    <View>
      <TouchableOpacity onPress={onPress} style={{
        padding: 5,
      
      }}>
        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
      </TouchableOpacity>
    </View>

    <View style={{
      left:20,
      top:4,
    }}>
    <Text style={{
        textAlign: 'center',
        fontFamily: fonts.primary[400],
        fontSize: 10,
        color: colors.black,
        top:5
      }}>{langkah}</Text>

      <Text style={{
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 25, 
        color: colors.tertiary
      }}>{judul}</Text>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({});
