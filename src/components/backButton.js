import {Icon} from '@rneui/base';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';
import {moderateScale} from './moderateScale';

const BackButton = ({
  onPress,
  size = 22,
  name = 'left',
  type = 'ant-design',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.backButton}>
      <Icon size={moderateScale(size)} name={name} type={type} />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  backButton: {
    backgroundColor: theme.colors.bgColor,
    borderRadius: moderateScale(10),
    padding: moderateScale(4),
    elevation: 5,
  },
});
export default BackButton;
