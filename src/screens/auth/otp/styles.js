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
    color: 'white',
    fontSize: theme.fontSize.header,
    fontWeight: 'bold',
  },
  titleTab: {
    color: 'white',
    fontWeight: '500',
    marginTop: 10,
  },

  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingVertical: moderateScale(5),
  },

  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  button: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    color: theme.colors.lightBlue,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 14,
    color: theme.colors.lightBlue,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Styles;
