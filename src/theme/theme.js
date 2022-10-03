import {Dimensions} from 'react-native';
import {moderateScale} from '../components/moderateScale';

const {width, height} = Dimensions.get('window');
export const theme = {
  colors: {
    darkBlue: '#24265D',
    lightBlue: '#50ADE5',
    white: '#FFFFFF',
    border: '#A5A6BB',
    bgColor: '#EFEEEE',
    black: 'black',
    buttonBlue: '#003AA8',
    blueBg: '#B7DBF1',
  },
  fontSize: {
    header: moderateScale(30),
    big: moderateScale(28),
    regular: moderateScale(20),
    normal: moderateScale(16),
  },
  size: {
    width: width / 1.1,
    button: width / 1.5,
    height: height,
  },
};
