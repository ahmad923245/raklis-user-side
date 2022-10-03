import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from '@rneui/base';
import {theme} from '../../../theme/theme';
import Styles from './styles';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import BackButton from '../../../components/backButton';
import {apiKey} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, registerManager} from '../../../redux/actions/auth';
import {Loading} from '../../../components/Loading';
import ShowSnackBar from '../../../components/SnackBar';
import {useTranslation} from 'react-i18next';

const AccountDetail = ({navigation, route}) => {
  const {t} = useTranslation();
  const {data} = route.params;
  const [fullName, setFullName] = useState('');

  const dispatch = useDispatch();
  const {authLoading} = useSelector(state => state.auth);

  const handleNav = () => {
    if (fullName !== '') {
      var FormData = require('form-data');
      var dat = new FormData();
      dat.append('__api_key__', apiKey);
      dat.append('full_name', fullName);
      dat.append('email', data.email);
      dat.append('phone', data.phone);
      dat.append('password', data.password);
      dispatch(authLoad(true));
      dispatch(registerManager(dat, onSuccess));
    } else {
      ShowSnackBar('Enter your fullname');
    }
  };

  const onSuccess = val => {
    val && navigation.navigate('Login');
    ShowSnackBar('Registered Successfully', 'green');
  };

  return (
    <SafeAreaView
      style={{height: theme.size.height, backgroundColor: theme.colors.blueBg}}>
      <View style={Styles.topCont}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View style={Styles.middleCont}>
        <Text style={Styles.heading}>{t("AccountLabel")}</Text>
        <View style={Styles.textInput}>
          <Text style={Styles.title}>{t("fullname")}</Text>
          <TextInput
            style={{
              padding: 3,
              width: '90%',
              color:theme.colors.lightBlue,
              paddingVertical: 5,
            }}
            placeholderTextColor={theme.colors.lightBlue}
            placeholder={t("fullnamePlace")}
            onChangeText={val => {
              setFullName(val);
            }}
          />
        </View>
      </View>

      <Button
        onPress={() => {
          handleNav();
        }}
        title={t("continue")}
      />
      <Loading visible={authLoading} />
      <BottomLogo />
    </SafeAreaView>
  );
};
export default AccountDetail;
