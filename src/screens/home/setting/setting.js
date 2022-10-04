import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import BackButton from '../../../components/backButton';
import ImagePicker from 'react-native-image-crop-picker';
import { theme } from '../../../theme/theme';
import Styles from './styles';
import { Icon } from '@rneui/base';
import apiKey from '../../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAvatar,
  changeCurrency,
  changePassword,
  convert,
  homeLoad,
  setLanguage,
} from '../../../redux/actions/home';
import { Loading } from '../../../components/Loading';
import ShowSnackBar from '../../../components/SnackBar';
import { useTranslation } from 'react-i18next';

const Setting = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const { loginData } = useSelector(state => state.auth);
  const [image, setImage] = useState(require('../../../images/hotel2.jpg'));
  const [imageUri, setImageUri] = useState(loginData.avatar);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { homeLoading } = useSelector(state => state.home);
  console.log(apiKey);

  const dispatch = useDispatch();

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImageUri(image.path);
      handleImg(image);
      setModalVisible(false);
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageUri(image.path);
      handleImg(image);
    });
  };
  const modalOptions = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.centeredView}>
          <View>
            <View style={Styles.close}>
              <Icon
                onPress={() => {
                  setModalVisible(false);
                }}
                name="close"
              />
            </View>

            <View style={Styles.modalView}>
              <TouchableOpacity
                style={Styles.tabCont}
                onPress={() => {
                  setImageVisible(true);
                  setModalVisible(false);
                }}>
                <Icon name="eye" type="feather" />
                <Text style={{ marginLeft: 20, color: 'black' }}>
                  {t('viewImage')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.tabCont}
                onPress={() => {
                  openGallery();
                }}>
                <Icon name="image" type="feather" />
                <Text style={{ marginLeft: 20, color: 'black' }}>
                  {t('openGallery')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.tabCont}
                onPress={() => {
                  openCamera();
                }}>
                <Icon name="camera" type="feather" />
                <Text style={{ marginLeft: 20, color: 'black' }}>
                  {t('openCamer')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 20 }}></View>
        </View>
      </Modal>
    );
  };
  const imageModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={imageVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setImageVisible(!imageVisible);
        }}>
        <View style={Styles.centeredImageView}>
          <View style={Styles.closeImage}>
            <Icon
              onPress={() => {
                setImageVisible(false);
              }}
              name="close"
            />
          </View>

          <View style={Styles.imageView}>
            <Image
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
              source={
                imageUri === '' || imageUri === null ? image : { uri: imageUri }
              }
            />
          </View>
        </View>
      </Modal>
    );
  };

  const handleImg = image => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append(
      '__api_key__',
      'g4AO6aj0cDl6RiiRQAECZohuXiUYCoL9ENSiVhHvVxzERKQ1hkn1L1PrJMR1',
    );
    data.append('user_uid', loginData.uid);
    data.append('avatar', {
      name: image.filename,
      type: image.mime,
      uri: image.path,
    });
    console.log(data);
    dispatch(homeLoad(true));
    dispatch(changeAvatar(data));

    console.log(data);
  };

  const handlePassword = () => {
    if (password === '' || confirmPassword === '') {
      ShowSnackBar('Please fill the fields');
    } else if (password !== confirmPassword) {
      ShowSnackBar('Password not matched');
    } else {
      var FormData = require('form-data');
      var data = new FormData();
      data.append(
        '__api_key__',
        'g4AO6aj0cDl6RiiRQAECZohuXiUYCoL9ENSiVhHvVxzERKQ1hkn1L1PrJMR1',
      );
      data.append('user_uid', loginData.uid);
      data.append('password', password);
      console.log(data);
      dispatch(homeLoad(true));
      dispatch(changePassword(data, passwordSuccess));
    }
  };

  const passwordSuccess = () => {
    setPasswordView(false);
  };

  const converCurrency = () => {
    dispatch(homeLoad(true));
    var formdata = new FormData();
    formdata.append('amount', '1');
    dispatch(convert(formdata));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.header}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={Styles.headerTextCont}>
          <Icon name="gear" type="font-awesome" color={theme.colors.border} />
          <Text style={Styles.headerText}>{t('setting')}</Text>
        </View>
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={'transparent'}
          size={theme.fontSize.normal}
        />
      </View>

      <View style={Styles.middleCont}>
        <View style={Styles.options}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="account-circle"
              type={'material-icons'}
              style={{ width: 30 }}
              color={theme.colors.border}
            />
            <Text style={Styles.optionsText}>{t('changeProfile')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <Image
              style={Styles.profileImage}
              source={
                imageUri === '' || imageUri === null ? image : { uri: imageUri }
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Styles.middleCont}>
        <View style={Styles.options}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              style={{ width: 30 }}
              name="language"
              type={'material-icons'}
              color={theme.colors.border}
            />
            <Text style={Styles.optionsText}>{t('changelanguage')}</Text>
          </View>
          <View style={Styles.buttonCont}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => {
                i18n.changeLanguage('en');
                dispatch(setLanguage('en'));
              }}>
              <Text style={Styles.buttonText}>{t('english')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => {
                i18n.changeLanguage('ara');
                dispatch(setLanguage('ara'));
              }}>
              <Text style={Styles.buttonText}>{t('arabic')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.middleCont}>
        <View style={Styles.options}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              style={{ width: 30 }}
              name="dollar"
              type={'font-awesome'}
              color={theme.colors.border}
            />
            <Text style={Styles.optionsText}>{t('changeCurrency')}</Text>
          </View>
          <View style={Styles.buttonCont}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => {
                converCurrency();
              }}>
              <Text style={Styles.buttonText}>{'SDG'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => {
                dispatch(changeCurrency('USD'));
                ShowSnackBar('Currency Converted Successfully', 'green');
              }}>
              <Text style={Styles.buttonText}>{t('usd')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={Styles.middleCont}>
        <View style={Styles.options}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              style={{ width: 30 }}
              name="key"
              type={'entypo'}
              color={theme.colors.border}
            />
            <Text style={Styles.optionsText}>{t('changePass')}</Text>
          </View>
          {passwordView && (
            <TouchableOpacity
              style={Styles.button}
              onPress={() => {
                setPasswordView(false);
              }}>
              <Text style={Styles.buttonText}>{t('Close')}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={Styles.button}
            onPress={() => {
              setPasswordView(true);
            }}>
            {passwordView ? (
              <Text
                style={Styles.buttonText}
                onPress={() => {
                  handlePassword();
                }}>
                {t('save')}
              </Text>
            ) : (
              <Text style={Styles.buttonText}>{t('save')}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {passwordView && (
        <View style={Styles.passwordCont}>
          <View style={Styles.inputCont}>
            <TextInput
              style={{
                width: '90%',
                height: '100%',
                color: theme.colors.lightBlue,
                alignSelf: 'center',
              }}
              placeholder={t('passwordPlaceholder')}
              onChangeText={val => {
                setPassword(val);
              }}
            />
          </View>
          <View style={Styles.inputCont}>
            <TextInput
              style={{
                width: '90%',
                height: '100%',
                alignSelf: 'center',
                color: theme.colors.lightBlue,
              }}
              placeholder={t('repeatPassword')}
              onChangeText={val => {
                setConfirmPassword(val);
              }}
            />
          </View>
        </View>
      )}
      <View style={Styles.middleCont}>
        <View style={Styles.options}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              style={{ width: 30 }}
              name="clipboard-list"
              type={'font-awesome-5'}
              color={theme.colors.border}
            />
            <Text style={Styles.optionsText}>{t('termAndConditions')}</Text>
          </View>
          <TouchableOpacity style={Styles.button} onPress={() => { }}>
            <Text style={Styles.buttonText}>{t('check')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[Styles.middleCont, { marginTop: 50 }]}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: theme.fontSize.normal,
            color: 'black',
          }}>
          {t('connectTo')}
        </Text>
      </View>
      <View style={Styles.iconCont}>
        <TouchableOpacity
          style={Styles.icon}
          onPress={() => {
            Linking.openURL('https://www.facebook.com/');
          }}>
          <Icon name="facebook" type="feather" size={40} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.icon}
          onPress={() => {
            Linking.openURL('https://www.whatsapp.com/');
          }}>
          <Icon name="whatsapp" type="font-awesome" size={40} color="#128C7E" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.icon}
          onPress={() => {
            Linking.openURL('https://www.instagram.com/');
          }}>
          <Icon name="instagram" type="ant-design" size={40} color="#C13584" />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.icon}
          onPress={() => {
            Linking.openURL('https://twitter.com/');
          }}>
          <Icon name="twitter" type="feather" size={40} color="#00acee" />
        </TouchableOpacity>
        {imageModal()}
        {modalOptions()}
      </View>
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};
export default Setting;
