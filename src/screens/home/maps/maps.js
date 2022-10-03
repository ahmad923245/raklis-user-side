import {Icon} from '@rneui/base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, View, Text} from 'react-native';
import BackButton from '../../../components/backButton';
import {theme} from '../../../theme/theme';
import Styles from './styles';

const Maps = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <SafeAreaView
      style={{
        height: theme.size.height,
        backgroundColor: theme.colors.blueBg,
      }}>
      <View style={Styles.header}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={Styles.headerTextCont}>
          <Icon name="location-pin" color={theme.colors.border} />
          <Text style={Styles.headerText}>{t('maps')}</Text>
        </View>
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={'transparent'}
          size={theme.fontSize.normal}
        />
      </View>
    </SafeAreaView>
  );
};
export default Maps;
