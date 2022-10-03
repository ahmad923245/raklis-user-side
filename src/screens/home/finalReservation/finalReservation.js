import {Icon} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BackButton from '../../../components/backButton';
import {moderateScale} from '../../../constants/moderateScale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {theme} from '../../../theme/theme';
import Styles from './styles';
import moment from 'moment';
import {apiKey} from '../../../constants/constants';
import ShowSnackBar from '../../../components/SnackBar';
import {Loading} from '../../../components/Loading';
import {homeLoad, reserveRoom} from '../../../redux/actions/home';
import {useTranslation} from 'react-i18next';

const FinalReservation = ({navigation, route}) => {
  const {t} = useTranslation();
  const {checkinDate, checkoutDate} = route.params;

  const {finalReserve, homeLoading, dollar, currency} = useSelector(
    state => state.home,
  );
  const {loginData} = useSelector(state => state.auth);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [type, setType] = useState('');
  const [nights, setNights] = useState('');
  const [price, setPrice] = useState('');
  const [checkInDate, setCheckInDate] = useState(t('selectCheckin'));
  const [checkOutDate, setCheckOutDate] = useState(t('selectCheckout'));

  useEffect(() => {
    var a = moment(checkinDate, 'M/D/YYYY');
    var b = moment(moment(checkoutDate).format('l'), 'M/D/YYYY');
    var diffDays = b.diff(a, 'days');
    setNights(diffDays);
  }, []);

  //Api functions

  const dispatch = useDispatch();

  const handleReserve = () => {
    {
      var formdata = new FormData();
      formdata.append('__api_key__', apiKey);
      formdata.append('hotel_room_uid', finalReserve.uid);
      formdata.append('user_uid', loginData.uid);
      formdata.append('check_in_date', checkInDate.toString());
      formdata.append('check_out_date', checkOutDate.toString());
      dispatch(homeLoad(true));
      console.log('formdata...........');
      console.log(formdata);
      dispatch(reserveRoom(formdata, success));
    }
  };

  const success = data => {
    const dat = {
      resId: data,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      nights: nights,
      price: finalReserve.price * nights,
    };
    navigation.navigate('Ticket', {
      data: dat,
    });
  };

  // designing functions

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    type === 'Checkin'
      ? setCheckInDate(moment(date).format('l'))
      : setCheckOutDate(moment(date).format('l'));

    console.log('diff');
    hideDatePicker();
    if (checkInDate !== 'Select Check In Date' && type !== 'Checkin') {
      var a = moment(checkInDate, 'M/D/YYYY');
      var b = moment(moment(date).format('l'), 'M/D/YYYY');
      var diffDays = b.diff(a, 'days');
      setNights(diffDays);
    }
  };
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.headerCont}>
        <BackButton
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="menu"
          type="entypo"
        />
        <View style={Styles.headerTextCont}>
          <Icon name="book" type="font-awesome" color={theme.colors.border} />
          <Text style={Styles.headerText}> {t('finalReservation')}</Text>
        </View>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView style={{}}>
        <View style={Styles.card}>
          <View style={Styles.descriptionCont}>
            <Text style={{color: 'black'}}>{finalReserve.name}</Text>
            {/* <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/couple.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                2 Adults
              </Text>
            </View> */}
            <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/bed.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                {finalReserve.bed_type}
              </Text>
            </View>
            <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/roomSize.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                {t('roomSize')} {finalReserve.room_size}
              </Text>
            </View>
            <View style={Styles.animityTab}>
              <Text style={{color: 'black'}}>{t('amenityAvail')}</Text>
              <View>
                <View style={{flexDirection: 'row'}}>
                  {finalReserve.flat_screen && (
                    <View style={Styles.amentiesTab}>
                      <View style={Styles.amentiesIcon}>
                        <Icon size={14} name="tv" color={'green'} />
                      </View>
                      <Text style={Styles.amentyText}>{t('flatscreen')}</Text>
                    </View>
                  )}
                  {finalReserve.city_view && (
                    <View style={Styles.amentiesTab}>
                      <View style={Styles.amentiesIcon}>
                        <Icon
                          size={13}
                          name="city"
                          type="font-awesome-5"
                          color={'green'}
                        />
                      </View>
                      <Text style={Styles.amentyText}>{t('cityView')}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View style={Styles.scndLine}>
              {finalReserve.gym && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={14}
                      name="dumbbell"
                      color={'green'}
                      type="font-awesome-5"
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('Gym')}</Text>
                </View>
              )}
              {finalReserve.bathtub && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={14}
                      name="bath"
                      color={'green'}
                      type="font-awesome-5"
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('bathtub')}</Text>
                </View>
              )}
              {finalReserve.free_wifi && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={14}
                      name="wifi"
                      type="font-awesome-5"
                      color={'green'}
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('Wifi')}</Text>
                </View>
              )}
              {finalReserve.breakfast && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={13}
                      name="fastfood"
                      type="material-icons"
                      color={'green'}
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('Breakfast')}</Text>
                </View>
              )}
            </View>
            <View style={Styles.scndLine}>
              {finalReserve.kitchenette && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={14}
                      name="kitchen"
                      color={'green'}
                      type="material-icons"
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('Kitchen')}</Text>
                </View>
              )}
              {finalReserve.beach_view && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon
                      size={14}
                      name="umbrella-beach"
                      color={'green'}
                      type="font-awesome-5"
                    />
                  </View>
                  <Text style={Styles.amentyText}>{t('beach')}</Text>
                </View>
              )}
            </View>
            <View style={Styles.credential}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/fullname.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                {loginData.name}
              </Text>
            </View>
            <View style={Styles.credential}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/phone.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                {loginData.phone}
              </Text>
            </View>
            <View style={Styles.credential}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/emailIcon.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                {loginData.email}
              </Text>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View style={Styles.descripTabs}>
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(18),
                }}>
                {t('checkin')}
              </Text>
              <Text
                style={{
                  color: 'black',
                  marginLeft: moderateScale(10),
                  fontSize: moderateScale(18),
                }}>
                {checkinDate}
              </Text>
            </View>
            <View style={Styles.descripTabs}>
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(18),
                }}>
                {t('checkout')}
              </Text>
              <Text
                style={{
                  color: 'black',
                  marginLeft: moderateScale(10),
                  fontSize: moderateScale(18),
                }}>
                {checkoutDate}
              </Text>
            </View>
          </View>

          <Text style={{marginVertical: 20, color: 'black'}}>
            {t('idPassText')}
          </Text>

          <View style={Styles.descripTabs}>
            <Text
              style={{
                color: theme.colors.darkBlue,
                fontSize: moderateScale(18),
              }}>
              {t('total')}
            </Text>

            <Text
              style={{
                color: theme.colors.darkBlue,
                marginLeft: moderateScale(10),
                fontSize: moderateScale(18),
              }}>
              {nights} {t('nights')}
            </Text>
          </View>
          <View style={[Styles.descripTabs, {marginTop: 3}]}>
            <Text
              style={{
                color: theme.colors.darkBlue,
                fontSize: moderateScale(18),
              }}>
              {currency}{' '}
              {currency === 'USD'
                ? finalReserve.price
                : finalReserve.price * dollar}{' '}
              / {t('night')}
            </Text>
          </View>
          <View style={[Styles.descripTabs, {marginTop: 3}]}>
            <Text
              style={{
                color: theme.colors.darkBlue,
                fontSize: moderateScale(18),
              }}>
              {t('total')} {parseInt(nights) * finalReserve.price}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleReserve();
            }}
            style={Styles.manageButton}>
            <Icon
              name="hard-drive"
              type="feather"
              color={theme.colors.border}
            />
            <Text style={{marginLeft: 10, color: 'white'}}>{t('Reserve')}</Text>
          </TouchableOpacity>
          <View style={{height: moderateScale(30)}}></View>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default FinalReservation;
