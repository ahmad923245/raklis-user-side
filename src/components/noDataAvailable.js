import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import LoadingDots from 'react-native-loading-dots';
import {moderateScale} from '../constants/moderateScale';
import {theme} from '../theme/theme';
import Button from './button';

export const Nodata = ({title, onPress, btn}) => (
  <View style={loader.centering}>
    <Text
      style={{
        fontSize: 16,
        fontWeight: '800',
        color: theme.colors.darkBlue,
        textAlign: 'center',
        marginTop: 10,
      }}>
      {title}
    </Text>
    {btn ? <Button title={'Contact'} onPress={onPress} /> : null}
  </View>
);

const loader = StyleSheet.create({
  centering: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  hideIndicator: {
    top: -100,
    opacity: 0,
    position: 'absolute',
  },
});
