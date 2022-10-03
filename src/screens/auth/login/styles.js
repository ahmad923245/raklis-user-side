import React from 'react';
import {StyleSheet} from 'react-native';
import {exp} from 'react-native-reanimated';
import {moderateScale} from '../../../components/moderateScale';
import {theme} from '../../../theme/theme';

const Styles = StyleSheet.create({
  mainCont: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  topCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  topText: {
    color: theme.colors.darkBlue,
    fontSize: theme.fontSize.big,
    fontWeight: 'bold',
  },
  topDescription: {
    color: theme.colors.lightBlue,
    fontSize: theme.fontSize.normal,
  },
  middleCont: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  title: {
    color: theme.colors.darkBlue,
    fontWeight: '500',
  },
  textInput: {
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(5),
  },
  signup: {
    width: theme.size.width,
    alignSelf: 'center',
    textAlign: 'right',
    marginTop: 10,
    color: theme.colors.lightBlue,
  },
});

export default Styles;
