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
    // width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.border,
    fontSize: theme.fontSize.normal,
    fontWeight: '800',
    marginLeft: 5,
  },
  tabCont: {
    width: theme.size.width,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: moderateScale(4),
    marginTop: moderateScale(15),
  },
  tabMid: {
    width: '50%',
    alignItems: 'flex-start',
  },
  reserve: {
    color: theme.colors.black,
    fontWeight: '600',
  },
  reserveNo: {
    color: theme.colors.border,
    fontWeight: '400',
  },
  studio: {
    fontWeight: '100',
    color: theme.colors.black,
  },
  time: {
    color: theme.colors.border,
  },
  tabLast: {
    alignItems: 'flex-end',
    width: '30%',
  },
});

export default Styles;
