import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const {width, height} = Dimensions.get('screen');

const Styles = StyleSheet.create({
  mainCont: {
    backgroundColor: theme.colors.blueBg,
    height: theme.size.height,
  },
  header: {
    flexDirection: 'row',
    width: theme.size.width,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  nameProfileCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 100,
  },
  name: {
    marginLeft: 5,
    color: 'black',
  },
  title: {
    fontSize: moderateScale(20),
    color: 'black',
  },
  topFlat: {
    width: theme.size.width,
    alignSelf: 'center',
    marginTop: 10,
  },
  topFlatList: {
    // width: moderateScale(175),
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    // height: height / 3.4,
    marginRight: 10,
    paddingBottom: 10,
  },
  hotelPics: {
    width: '100%',
    height: height / 7,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    alignSelf: 'center',
  },
  hotelName: {
    fontSize: moderateScale(16),
    color: 'black',
    marginLeft: moderateScale(5),
    marginTop: 5,
  },
  hotelAddres: {
    fontSize: moderateScale(13),
    color: theme.colors.border,
    marginLeft: moderateScale(5),
    marginBottom: 2,
    width: width / 2.5,
  },
  ratingCont: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: moderateScale(6),
    justifyContent: 'space-between',
  },
  price: {
    fontSize: moderateScale(13),
    color: theme.colors.darkBlue,
  },
  bottomFlat: {
    marginTop: 10,
    width: theme.size.width,
    alignSelf: 'center',
  },
  bottomTab: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  bottomHotelPic: {
    width: '30%',
    borderBottomLeftRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    height: '100%',
  },
  hotelNameBottom: {
    fontSize: moderateScale(16),
    color: 'black',
    marginLeft: moderateScale(0),
    marginBottom: 5,
    marginTop: 5,
  },
  hotelAddresBottom: {
    fontSize: moderateScale(12),
    color: theme.colors.border,
    marginLeft: moderateScale(5),
    marginBottom: 2,
    width: '80%',
  },
  priceBottom: {
    fontSize: moderateScale(12),
    color: theme.colors.darkBlue,
  },
  amentiesTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  scndLine: {
    flexDirection: 'row',
    width: width / 1.2,
    justifyContent: 'flex-start',
  },
  amentiesIcon: {
    backgroundColor: 'white',
    elevation: 5,
    padding: moderateScale(3),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(5),
  },
  amentyText: {
    marginLeft: moderateScale(6),
    color: 'black',
    fontSize: 10,
  },
  bookButton: {
    backgroundColor: theme.colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 50,
    height: '90%',
    marginRight: 10,
    alignSelf: 'center',
  },
});

export default Styles;
