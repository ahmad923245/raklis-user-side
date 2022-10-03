import {Icon} from '@rneui/base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import BackButton from '../../../components/backButton';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import {theme} from '../../../theme/theme';
import Styles from './styles';

const ListYourProperty = ({navigation}) => {
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
          <Text style={Styles.headerText}>{t('listTitle')}</Text>
        </View>
        <Icon name="left" color="transparent" />
      </View>
      <View style={Styles.topText}>
        <Text style={{fontSize: 16, marginTop: 5, color: 'black'}}>
          {t('listMsg')}
          {'\n'}
          <Text style={Styles.email}>{t('mail')}</Text>
        </Text>
      </View>

      <View
        style={{
          width: theme.size.width,
          alignSelf: 'center',
          marginTop: 20,
        }}></View>
      <View style={Styles.msgCont}>
        <TextInput
          style={{
            width: '95%',
            height: '100%',
            color: theme.colors.lightBlue,
          }}/>
      </View>
      <Button title={t('send')} />
      <BottomLogo />
    </SafeAreaView>
  );
};

export default ListYourProperty;
