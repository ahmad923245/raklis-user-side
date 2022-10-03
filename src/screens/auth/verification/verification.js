import React from 'react';
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
import {useTranslation} from 'react-i18next';

const Verification = ({}) => {
  const {t} = useTranslation();
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
        <Text style={Styles.title}>{t('verficationLabel')}</Text>
        <View style={Styles.textInput}>
          <TextInput
            style={{padding: 3,color:theme.colors.lightBlue,}}
            placeholderTextColor={theme.colors.bgColor}
            placeholder={t('verficationPlace')}></TextInput>
        </View>
      </View>

      <Button
        onPress={() => {
          navigation.navigate('AccountDetail');
        }}
        title={t('continue')}
      />

      <BottomLogo />
    </SafeAreaView>
  );
};
export default Verification;
