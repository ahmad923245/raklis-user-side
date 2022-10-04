import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from '@rneui/base';
import BackButton from '../../../components/backButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {theme} from '../../../theme/theme';
import Button from '../../../components/button';
import BottomLogo from '../../../components/logo';
import Styles from './styles';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getHotels, homeLoad, storeHotels} from '../../../redux/actions/home';
import {updateCallAPIstate} from '../../../redux/actions/auth';
import {apiKey} from '../../../constants/constants';
import {Loading} from '../../../components/Loading';
import ShowSnackBar from '../../../components/SnackBar';
import {useTranslation} from 'react-i18next';

const FindHotel = ({navigation}) => {
  const {t} = useTranslation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [hotelName, setHotelName] = useState('');

  const dispatch = useDispatch();
  const {homeLoading} = useSelector(state => state.home);
  const {loginData} = useSelector(state => state.auth);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(updateCallAPIstate(false));

      fetchHotels();
    }, [fetchHotels]),
  );

  const fetchHotels = () => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    dispatch(homeLoad(true));
    dispatch(getHotels(formdata, success));
  };

  const success = data => {
    console.log(data);
    setHotels(data.hotels);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setDate(moment(date).format('LL'));
  };

  const filterHotels = () => {
    hotelName === '' ? ShowSnackBar('Please enter hotel name') : navigate();
  };
  const navigate = () => {
    const filterHotels = hotels?.filter(item => {
      return item.name.includes(hotelName);
    });
    console.log(filterHotels),
      dispatch(storeHotels(filterHotels)),
      navigation.navigate('FilteredHotel');
  };

  return (
    <SafeAreaView
      style={{
        height: theme.size.height,
        backgroundColor: theme.colors.blueBg,
      }}>
      <View style={Styles.header}>
        <BackButton
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="menu"
          type="entypo"
        />
        <BackButton
          onPress={() => {
            navigation.navigate('Home');
          }}
          name="home"
          type="entypo"
        />
      </View>

      <View
        style={{width: theme.size.width, alignSelf: 'center', marginTop: 40}}>
        <Text style={{fontSize: theme.fontSize.normal}}>
          {t('findLabel')}
          {'  '}
          <Text style={{fontWeight: '800'}}>{t('Raklis')}</Text>
        </Text>
      </View>

      <View>
        <View style={Styles.inputCont}>
          <Icon name="search" type="feather" color={theme.colors.lightBlue} />
          <TextInput
            style={{width: '90%', color: theme.colors.lightBlue}}
            placeholder={t('searchPlace')}
            placeholderTextColor={theme.colors.lightBlue}
            onChangeText={val => {
              setHotelName(val);
            }}></TextInput>
        </View>
        <TouchableOpacity
          style={Styles.inputCont}
          onPress={() => {
            showDatePicker();
          }}>
          <Icon name="calendar" type="feather" color={theme.colors.lightBlue} />
          <Text style={{width: '90%', color: theme.colors.lightBlue}}>
            {date ? date : t('datePlace')}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Button
        title={t('searchButton')}
        size={theme.colors.width}
        onPress={() => {
          filterHotels();
        }}
      />
      <BottomLogo />
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default FindHotel;
