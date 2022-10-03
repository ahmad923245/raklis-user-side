import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  mainCont: {
    height: theme.size.height,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: theme.colors.blueBg,
  },
  backButton: {
    backgroundColor: theme.colors.bgColor,
    borderRadius: moderateScale(10),
    padding: moderateScale(4),
    elevation: 5,
    position: 'absolute',
    top: Platform.OS === 'android' ? moderateScale(12) : moderateScale(60),
    left: Platform.OS === 'android' ? moderateScale(12) : moderateScale(10),
  },
  nameDescip: {
    width: theme.size.width,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    color: theme.colors.black,
    fontSize: theme.fontSize.regular,
  },
  description: {
    color: theme.colors.border,
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: 10,
    fontSize: moderateScale(14),
  },
  chatButton: {
    backgroundColor: 'white',
    height: moderateScale(40),
    width: moderateScale(40),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  tabCont: {
    backgroundColor: 'white',
    width: theme.size.width,
    // height: height / 3.5,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(20),
    elevation: 5,
    paddingVertical: moderateScale(10),
  },
  descriptionCont: {
    width: '95%',
    marginTop: 10,
    alignSelf: 'center',
  },
  tabTitle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descripTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(4),
  },
  animityTab: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: moderateScale(8),
  },
  scndLine: {
    flexDirection: 'row',
    marginTop: 5,
    width: width / 1.2,
    justifyContent: 'flex-start',
  },
  iconImage: {
    width: moderateScale(22),
    height: moderateScale(22),
  },
  amentiesTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  amentiesIcon: {
    backgroundColor: 'white',
    elevation: 5,
    padding: moderateScale(3),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(5),
  },
  amentyText: {marginLeft: moderateScale(6), color: 'black', fontSize: 12},
  checkBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  manageButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.buttonBlue,
    width: '45%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    alignSelf: 'flex-end',
    marginTop: moderateScale(10),
    marginBottom: 10,
  },
});

export default Styles;
