import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import {View} from 'react-native-animatable';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import {theme} from '../../../theme/theme';
import Styles from './styles';
import ShowSnackBar from '../../../components/SnackBar';
import {apiKey} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, userLogin} from '../../../redux/actions/auth';
import {Loading} from '../../../components/Loading';
import {useTranslation} from 'react-i18next';

const Login = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {authLoading} = useSelector(state => state.auth);

  const handleAPI = () => {
    if ((email === '', password === '')) {
      ShowSnackBar('Please fill all fields');
    } else {
      dispatch(authLoad(false));
      var formdata = new FormData();
      formdata.append('__api_key__', apiKey);
      formdata.append('contact', email);
      formdata.append('password', password);
      console.log(formdata);
      dispatch(authLoad(true));
      dispatch(userLogin(formdata, success));
    }
  };

  const success = data => {
    if (data) {
      navigation.navigate('MyDrawer');
    }
  };

  return (
    <SafeAreaView
      style={{
        height: theme.size.height,
        backgroundColor: theme.colors.blueBg,
      }}>
      <View style={Styles.topCont}>
        <Text style={Styles.topText}>{t('login')}</Text>
      </View>
      <View style={{height: '40%', marginTop: 20}}>
        <View style={Styles.middleCont}>
          <Text style={Styles.title}>{t('emailLabel')}</Text>
          <View style={Styles.textInput}>
            <TextInput
              style={{padding: 3, width: '90%', color: theme.colors.lightBlue}}
              placeholderTextColor={theme.colors.lightBlue}
              placeholder={t('emailPlaceHolder')}
              onChangeText={val => {
                setemail(val.trim());
              }}
            />
            <Icon name="mail" type="entypo" color={theme.colors.border} />
          </View>
        </View>

        <View style={Styles.middleCont}>
          <Text style={Styles.title}>{t('password')}</Text>
          <View style={Styles.textInput}>
            <TextInput
              style={{padding: 3, width: '90%', color: theme.colors.lightBlue}}
              placeholderTextColor={theme.colors.lightBlue}
              placeholder={t('passwordPlaceholder')}
              onChangeText={val => {
                setPassword(val);
              }}
            />
            <Icon name="key" type="entypo" color={theme.colors.border} />
          </View>
        </View>
        <Text style={Styles.signup}>
          {t('signUpQuesion')}{' '}
          <Text
            onPress={() => {
              navigation.navigate('Signup');
            }}
            style={{color: theme.colors.darkBlue}}>
            {t('signup')}
          </Text>
        </Text>
      </View>

      <Button
        title={t('login')}
        onPress={() => {
          handleAPI();
        }}
      />
      <Loading visible={authLoading} />
      <BottomLogo />
    </SafeAreaView>
  );
};

export default Login;
