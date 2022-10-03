import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text, TextInput, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/backButton';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import {theme} from '../../../theme/theme';
import Styles from './styles';
const ContactUs = ({navigation}) => {
  const [msg, setMsg] = useState('');
  const {loginData} = useSelector(state => state.auth);
  const {t} = useTranslation();
  return (
    <SafeAreaView
      style={{height: theme.size.height, backgroundColor: theme.colors.blueBg}}>
      <View style={Styles.headerCont}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={Styles.headerText}>{t('contactus')}</Text>
        </View>
        <Icon name="left" color="transparent" />
      </View>
      <View style={Styles.topText}>
        <Text style={{fontSize: 16, marginTop: 5, color: 'black'}}>
          {t('hello')} {loginData.name}
          {'\n'}
          {t('contactMsg')} {'\n'}
          <Text style={Styles.email}>{t('mail')}</Text>
        </Text>
      </View>

      <View
        style={{width: theme.size.width, alignSelf: 'center', marginTop: 20}}>
        <Text style={{color: 'black'}}>{t('asap')}</Text>
      </View>
      <View style={Styles.msgCont}>
        <TextInput
          style={{width: '95%', height: '100%', color: theme.colors.lightBlue}}
          multiline={true}
          onChangeText={val => {
            setMsg(val);
          }}
        />
      </View>
      <Button
        title={t('Send')}
        onPress={() => {
          Linking.openURL(
            `mailto:Raklis@gmail.com?subject=SendMail&body=${msg}`,
          );
        }}
      />
      <BottomLogo />
    </SafeAreaView>
  );
};

export default ContactUs;
