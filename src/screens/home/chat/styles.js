import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const Styles = StyleSheet.create({
  header: {
    width: theme.size.width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    height: moderateScale(45),
  },
  headerTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.border,
    fontWeight: '600',
    fontSize: theme.fontSize.regular,
    marginLeft: moderateScale(20),
  },
  tabCont: {
    width: theme.size.width,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },
  name: {
    color: 'black',
    fontSize: theme.fontSize.normal,
  },
  message: {
    color: theme.colors.border,
  },
  tabLast: {
    alignItems: 'flex-end',
  },
});

export default Styles;
