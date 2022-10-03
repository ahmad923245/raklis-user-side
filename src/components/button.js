import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';
import {moderateScale} from './moderateScale';

const Button = ({title, onPress, size = theme.size.button}) => {
  return (
    <TouchableOpacity style={[Styles.button, {width: size}]} onPress={onPress}>
      <Text style={Styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  button: {
    height: moderateScale(50),
    backgroundColor: theme.colors.darkBlue,
    alignSelf: 'center',
    borderRadius: moderateScale(100),
    marginTop: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
export default Button;
