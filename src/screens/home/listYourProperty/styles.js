import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const Styles = StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    width: theme.size.width,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.black,
    fontSize: theme.fontSize.regular,
    marginLeft: moderateScale(10),
  },
  topText: {width: theme.size.width, alignSelf: 'center', marginTop: 10},
  email: {fontWeight: 'bold', fontSize: 24, marginTop: 8},
  msgCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
