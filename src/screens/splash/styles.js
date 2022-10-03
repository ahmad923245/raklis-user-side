import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../../constants/moderateScale';
import {theme} from '../../theme/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blueBg,
  },
  image: {width: moderateScale(150), height: moderateScale(150)},
});

export default Styles;
