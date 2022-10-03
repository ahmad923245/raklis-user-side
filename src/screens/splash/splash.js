import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../../redux/actions/auth';
import {homeLoad} from '../../redux/actions/home';
import Styles from './styles';

const Splash = ({navigation}) => {
  const {i18n} = useTranslation();
  const {loggedIn} = useSelector(state => state.auth);
  const {language} = useSelector(state => state.home);

  console.log(language);

  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(language);
    dispatch(authLoad(false));
    setTimeout(() => {
      loggedIn ? navigation.navigate('MyDrawer') : navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={Styles.mainCont}>
      <Animatable.Image
        animation={'zoomIn'}
        resizeMode="contain"
        style={Styles.image}
        source={require('../../images/logo.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;
