import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  mainCont: {
    height: theme.size.height,
    backgroundColor: theme.colors.blueBg,
    alignSelf: 'center',
    width: '100%',
  },
  headerCont: {
    width: theme.size.width,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerTextCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '800',
    marginLeft: 10,
  },
  card: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(20),
    marginTop: moderateScale(20),
  },
  amentyText: {marginLeft: moderateScale(6), color: 'black', fontSize: 12},
  reserve: {
    color: theme.colors.black,
    fontWeight: '600',
  },
  reserveNo: {
    color: theme.colors.border,
    fontWeight: '400',
  },

  scrollView: {
    width: theme.size.width,
    alignSelf: 'center',
    height: height / 1.1,
    marginTop: 10,
  },
  notifyTab: {
    width: '100%',
    backgroundColor: theme.colors.lightBlue,
    borderRadius: moderateScale(5),
    height: moderateScale(70),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  notifyText: {
    fontWeight: 'bold',
    color: 'white',
  },
  notifyTabLeft: {
    width: '40%',
    paddingLeft: moderateScale(20),
  },
  notifyTabRight: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  notifyButton: {
    width: '45%',
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
  },
  nameDetail: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(15),
  },
  ticketCont: {
    width: theme.size.width,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10),
  },
  ticket: {
    color: theme.colors.border,
    fontWeight: 'bold',
    fontSize: theme.fontSize.header,
  },
  passportCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkBlue,
    width: '65%',
    height: moderateScale(50),
    paddingHorizontal: moderateScale(5),
    borderRadius: 100,
  },
  passportText: {
    color: 'white',
    fontWeight: '700',
    marginLeft: moderateScale(10),
  },
  descriptionCont: {
    width: theme.size.width,
    marginTop: 20,
  },
  descripTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(8),
  },
  credential: {
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'flex-start',
    padding: 5,
    width: '68%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(8),
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
  resevationText: {
    color: 'black',
    fontSize: theme.fontSize.regular,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: moderateScale(20),
  },
  manageButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.buttonBlue,
    width: '50%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    alignSelf: 'flex-end',
    marginRight: moderateScale(20),
    marginTop: moderateScale(10),
  },
});

export default Styles;
