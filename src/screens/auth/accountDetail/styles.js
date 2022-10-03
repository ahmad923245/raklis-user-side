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
  heading: {
    color: 'white',
    fontSize: theme.fontSize.header,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontWeight: '500',
  },
  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginTop: moderateScale(20),
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
