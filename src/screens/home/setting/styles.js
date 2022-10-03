import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';

const {width, height} = Dimensions.get('window');
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
  middleCont: {
    width: theme.size.width,
    alignSelf: 'center',
  },
  options: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  optionsText: {
    fontSize: 15,
    color: theme.colors.black,
    marginLeft: 5,
  },
  profileImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 100,
  },
  buttonCont: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    elevation: 5,
    width: moderateScale(55),
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  passwordCont: {
    width: theme.size.width,
    alignSelf: 'center',
  },
  inputCont: {
    bgColor: 'white',
    height: moderateScale(40),
    borderWidth: 0.5,
    borderRadius: Platform.OS === 'ios' ? moderateScale(10) : 0,
    borderColor: theme.colors.border,
    marginTop: moderateScale(14),
    bgColor: 'white',
  },
  iconCont: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: theme.size.width,
    alignSelf: 'center',
  },
  icon: {
    height: 65,
    width: 65,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  close: {
    width: width / 1.5,
    alignItems: 'flex-end',
  },
  closeImage: {
    width: width / 1.06,
    alignItems: 'flex-end',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width / 1.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  imageView: {
    backgroundColor: theme.colors.bgColor,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width / 1.06,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  tabCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: moderateScale(15),
    height: moderateScale(30),
  },
  line: {
    width: width / 1.5,
    borderBottomWidth: 0.5,
    borderRadius: theme.colors.border,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Styles;
