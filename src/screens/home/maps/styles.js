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
    width: '40%',
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.border,
    fontSize: theme.fontSize.normal,
    fontWeight: '800',
    marginLeft: 15,
  },
});
export default Styles;
