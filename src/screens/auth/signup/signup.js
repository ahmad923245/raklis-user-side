import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Linking,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BackButton from '../../../components/backButton';
import {Icon} from '@rneui/base';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';
import Styles from './styles';
import ShowSnackBar from '../../../components/SnackBar';
import {Loading} from '../../../components/Loading';
import {useTranslation} from 'react-i18next';

const Signup = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState('');

  const {width, height} = Dimensions.get('window');

  const validation = () => {
    const correct = mobilevalidate();
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    mobilevalidate();
    if (
      email === '' ||
      phone === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      ShowSnackBar('Fill all the fields');
    } else if (reg.test(email) === false) {
      ShowSnackBar('Enter Valid Email');
    } else if (correct === false) {
      console.log(correct);
      ShowSnackBar(
        'Invalid Phone Number : Phone numbers are written in the format [+][country code]',
      );
    } else {
      console.log(correct);
      handleNav();
    }
  };

  const mobilevalidate = text => {
    const reg =
      /^(?:(?:\(?(:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
    console.log('eg.test(phone)');
    console.log(reg.test(phone));
    console.log(phone);
    if (reg.test(phone) === false) {
      return false;
    } else {
      return true;
    }
  };

  const handleNav = () => {
    if (password === confirmPassword) {
      if (terms) {
        const data = {
          email: email,
          phone: phone,
          password: password,
        };
        navigation.navigate('OtpScreen', {data: data});
      } else {
        ShowSnackBar('Check Terms and Conditions');
      }
    } else {
      ShowSnackBar('Password not matched.');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.blueBg}}>
      <View style={Styles.header}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        <View style={Styles.topCont}>
          <Text style={Styles.topText}>{t('welcome')}</Text>
          <Text style={Styles.topDescription}>{t('RikliTeam')}</Text>
        </View>
        <View >
          <View style={Styles.middleCont}>
            <Text style={Styles.title}>{t('email')}</Text>
            <View style={Styles.textInput}>
              <TextInput
                style={{
                  padding: 3,
                  width: '90%',
                  color: theme.colors.lightBlue,
                }}
                placeholderTextColor={theme.colors.lightBlue}
                placeholder={t('emailPlace')}
                onChangeText={val => {
                  setEmail(val.trim());
                }}
              />
              <Icon name="mail" type="entypo" color={theme.colors.bgColor} />
            </View>
          </View>

          <View style={Styles.middleCont}>
            <Text style={Styles.title}>{t('phone')}</Text>
            <View style={Styles.textInput}>
              <TextInput
                style={{
                  padding: 3,
                  width: '90%',
                  color: theme.colors.lightBlue,
                }}
                placeholderTextColor={theme.colors.lightBlue}
                placeholder={t('phonePlace')}
                onChangeText={val => {
                  setPhone(val);
                }}
                keyboardType={'phone-pad'}
              />
              <Icon name="mail" type="entypo" color={theme.colors.bgColor} />
            </View>
          </View>

          <View style={Styles.middleCont}>
            <Text style={Styles.title}>{t('password')}</Text>
            <View style={Styles.textInput}>
              <TextInput
                style={{
                  padding: 3,
                  width: '90%',
                  color: theme.colors.lightBlue,
                }}
                placeholderTextColor={theme.colors.lightBlue}
                placeholder={t('passwordPlaceholder')}
                onChangeText={val => {
                  setPassword(val);
                }}
              />
              <Icon name="key" type="entypo" color={theme.colors.bgColor} />
            </View>
          </View>

          <View style={Styles.middleCont}>
            <View style={Styles.textInput}>
              <TextInput
                style={{
                  padding: 3,
                  width: '90%',
                  color: theme.colors.lightBlue,
                }}
                placeholderTextColor={theme.colors.lightBlue}
                placeholder={t('repeatPassword')}
                onChangeText={val => {
                  setConfirmPassword(val);
                }}
              />
              <Icon name="key" type="entypo" color={theme.colors.bgColor} />
            </View>
          </View>
          <View style={Styles.termsandCondition}>
            <BouncyCheckbox
              size={moderateScale(15)}
              fillColor={theme.colors.lightBlue}
              unfillColor={theme.colors.white}
              iconStyle={{borderColor: theme.colors.border}}
              isChecked={terms}
              onPress={() => setTerms(!terms)}
            />
            <Text
              onPress={() => {
                Linking.openURL('https://asenigma.abdulwahab.live/');
              }}
              style={{marginLeft: -8, color: theme.colors.darkBlue}}>
              {t('termAndConditions')}
            </Text>
          </View>
        </View>
        <Button
          onPress={() => {
            validation();
          }}
          title={t('signup')}
        />
        <Image
          resizeMode="contain"
          style={Styles.image}
          source={require('../../../images/logo.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
