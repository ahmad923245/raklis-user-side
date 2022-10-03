import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const Styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  topCont: {
    width: theme.size.width,
    alignSelf: 'center',
    alignItems: 'flex-start',
    marginTop: moderateScale(20),
  },
  backButton: {
    backgroundColor: theme.colors.bgColor,
    borderRadius: moderateScale(10),
    padding: moderateScale(4),
    elevation: 5,
  },
  middleCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(30),
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fontSize.header,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 2,
    paddingVertical: 5,
  },

  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
});

export default Styles;
