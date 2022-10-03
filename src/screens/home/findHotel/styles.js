import React from 'react';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/theme';

const Styles = StyleSheet.create({
  header: {
    width: theme.size.width,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  inputCont: {
    backgroundColor: 'white',
    width: theme.size.width,
    alignSelf: 'center',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Styles;
