import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/base';
import { theme } from '../../../theme/theme';
import Styles from './styles';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import BackButton from '../../../components/backButton';
import RnOtpTimer from 'rn-otp-timer';
import { apiKey } from '../../../constants/constants';
import { authLoad, emailVerify, Otp } from '../../../redux/actions/auth';
import ShowSnackBar from '../../../components/SnackBar';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../../components/Loading';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';

const OtpScreen = ({ route, navigation }) => {



  const { t } = useTranslation();

  const { data } = route.params;

  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  const dispatch = useDispatch();

  const { authLoading } = useSelector(state => state.auth);


  console.log("this is loading state",authLoading)

  useEffect(() => {
    handleNav();
  }, []);

  const handleNav = () => {
    dispatch(authLoad(true));
    signInWithPhoneNumber(data.phone.toString());
  };

  const onSuccess = data => {
    data && ShowSnackBar('Otp sent to your Email.', 'green');
  };

  // Handle the button press
  const signInWithPhoneNumber = async phoneNumber => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber,true);
      ShowSnackBar(`Otp sent to your Phone.${data.phone}`, 'green');
      dispatch(authLoad(false));
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
      console.log('error.message');
      console.log(error.message);
      ShowSnackBar(
        'Invalid Phone Number : Phone numbers are written in the format [+][country code]',
      );
    }
  };

  const confirmCode = async () => {
    try {
      console.log(otp);
      const res = await confirm.confirm(otp);
     navigation.navigate('AccountDetail', { data: data });
    } catch (error) {
      console.log(error);
      console.warn('Invalid code.');
      ShowSnackBar(error.toString());
    }
  };

  const OtpSuccess = dat => {
    console.log('otp Success');
    dat ? navigation.navigate('AccountDetail', { data: data }) : null;
  };

  return (
    <SafeAreaView
      style={{
        height: theme.size.height,
        backgroundColor: theme.colors.blueBg,
      }}>
      <View style={Styles.topCont}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={Styles.middleCont}>
        <Text style={Styles.title}>{t('otpLabel')}</Text>
        <Text style={Styles.titleTab}>
          {t('otpmsg')} {data.phone}{' '}
        </Text>
        <View style={Styles.textInput}>
          <TextInput
            style={{ padding: 3, width: '90%', color: theme.colors.lightBlue }}
            placeholderTextColor={theme.colors.lightBlue}
            placeholder={t('otpPlace')}
            keyboardType="numeric"
            onChangeText={val => {
              setOtp(val);
            }}
          />
        </View>
        <View style={{ height: 40, justifyContent: 'center' }}>
          <RnOtpTimer
            minutes={1}
            seconds={59}
            resendButtonStyle={Styles.button}
            resendButtonTextStyle={Styles.buttonText}
            resendButtonText={t('reset')}
            resendButtonAction={() => {
              handleNav();
            }}
          />
        </View>
      </View>

      <Button
        onPress={() => {
          confirmCode();
        }}
        title={t('continue')}
      />
      <Loading visible={authLoading} />
      <BottomLogo />
    </SafeAreaView>
  );
};
export default OtpScreen;
