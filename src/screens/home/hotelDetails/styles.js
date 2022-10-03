import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  mainCont: {
    height: theme.size.height,
    width: '100%',
    alignSelf: 'center',
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
  heartButton: {
    backgroundColor: 'white',
    height: moderateScale(50),
    width: moderateScale(50),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    marginTop: moderateScale(25),
  },
  priceReviewCont: {
    flexDirection: 'row',
    width: '65%',
    marginTop: 15,
    justifyContent: 'space-between',
    marginLeft: moderateScale(20),
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  des: {
    fontSize: 12,
    color: theme.colors.darkBlue,
  },
  aminitiesCont: {width: theme.size.width, alignSelf: 'center', marginTop: 15},
  aminities: {
    fontSize: 20,
    color: 'black',
  },
  aminitiesTabCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: theme.size.width,
    marginTop: moderateScale(5),
  },
  amentyText: {marginLeft: moderateScale(6), color: 'black', fontSize: 12},
  amentiesTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(5),
    marginTop: 10,
  },
  amentiesIcon: {
    backgroundColor: 'white',
    elevation: 5,
    padding: moderateScale(3),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(5),
  },

  scndLine: {
    flexDirection: 'row',
    marginTop: 5,
    width: width / 1.2,
    justifyContent: 'flex-start',
  },
  line: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.bgColor,
    marginTop: moderateScale(20),
    width: '50%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  inputCont: {
    backgroundColor: 'white',
    width: theme.size.width,
    alignSelf: 'flex-start',
    height: moderateScale(85),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: moderateScale(10),
  },
  reviewCont: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 20,
  },
});

export default Styles;
