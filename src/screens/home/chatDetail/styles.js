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
    color: theme.colors.border,
    fontSize: theme.fontSize.regular,
    marginLeft: moderateScale(10),
  },
  middleCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  date: {
    marginTop: 20,
    color: theme.colors.border,
    marginBottom: 10,
  },
  pic: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10,
  },
  questionCont: {
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  questionTab: {
    backgroundColor: theme.colors.lightBlue,
    padding: 10,
    width: '70%',
    borderRadius: 10,
    elevation: 5,
  },
  myQuestion: {
    backgroundColor: theme.colors.white,
    padding: 10,
    width: '70%',
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
    alignSelf: 'flex-end',
  },
  msgCont: {
    alignItems: 'flex-end',
    width: '90%',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  time: {
    marginTop: 4,
    fontSize: 11,
    color: 'black',
  },
  bottomTypeMsg: {
    width: theme.size.width,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 4,
  },
  messageCont: {
    backgroundColor: theme.colors.white,
    width: '90%',
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgInput: {
    width: '90%',
    alignSelf: 'center',
    height: '100%',
    color: 'black',
  },
});

export default Styles;
