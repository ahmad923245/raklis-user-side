import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../../theme/theme';
import {moderateScale} from '../../../constants/moderateScale';

const Styles = StyleSheet.create({
  mainCont: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  topCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  header: {
    alignItems: 'flex-start',
    width: theme.size.width,
    marginTop: 10,
    alignSelf: 'center',
  },
  topText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.big,
    fontWeight: 'bold',
  },
  topDescription: {
    color: theme.colors.white,
    fontSize: theme.fontSize.normal,
  },
  middleCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  termsandCondition: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: theme.colors.white,
    fontWeight: '500',
  },
  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  image: {
    width: moderateScale(130),
    height: moderateScale(130),
    alignSelf: 'center',
    marginTop: 60,
  },
});

export default Styles;
