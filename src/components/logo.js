import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {moderateScale} from './moderateScale';

const BottomLogo = () => {
  return (
    <Image
      resizeMode="contain"
      style={Styles.image}
      source={require('../images/logo.png')}
    />
  );
};

const Styles = StyleSheet.create({
  image: {
    width: moderateScale(130),
    height: moderateScale(130),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});

export default BottomLogo;
