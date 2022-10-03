import {Icon} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from '../../../constants/moderateScale';
import {finalReservation} from '../../../redux/actions/home';
import {theme} from '../../../theme/theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Styles from './styles';
import moment from 'moment';
import {Nodata} from '../../../components/noDataAvailable';
import {useFocusEffect} from '@react-navigation/native';

const dat = [{key: 1}, {key: 1}, {key: 1}, {key: 1}];

const ReservationPage = ({navigation, route}) => {
  const {t} = useTranslation();

  const {homeData, dollar, currency} = useSelector(state => state.home);
  const [starCount, setStarCount] = useState(4);
  const [rooms, setRooms] = useState(homeData.rooms);
  const [checkInDate, setCheckInDate] = useState(t('selectCheckin'));
  const [checkOutDate, setCheckOutDate] = useState(t('selectCheckout'));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [type, setType] = useState('');
  const [nights, setNights] = useState('');
  const images = [
    require('../../../images/hotelImage.png'),
    require('../../../images/hotel2.jpg'),
  ];

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      setReservation();
    }, [setReservation]),
  );

  const setReservation = () => {
    setCheckInDate(t('selectCheckin'));
    setCheckOutDate(t('selectCheckout'));
    console.log(data);
    var data = homeData.rooms;
    data.forEach(function (item, i) {
      if (item.state === 'RESERVED') {
        data.splice(i, 1);
        data.unshift(item);
      }
    });
    setRooms(data);
  };

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
    <SafeAreaView style={{height: theme.size.height}}>
      <SliderBox autoplay circleLoop images={homeData.images} />
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={Styles.backButton}>
        <Icon size={moderateScale(22)} name={'menu'} type={'entypo'} />
      </TouchableOpacity>

      <ScrollView>
        <View style={Styles.nameDescip}>
          <View>
            <Text style={Styles.name}>{homeData.name}</Text>
            <Text
              style={{fontSize: 14, marginTop: 5, color: theme.colors.border}}>
              Khartoum, Sudan
            </Text>
          </View>
          <View style={{width: '30%'}}>
            <StarRating
              containerStyle={{width: '100%'}}
              disabled={false}
              maxStars={5}
              rating={homeData.rating}
              selectedStar={rating => setStarCount(rating)}
              starSize={20}
              fullStarColor={'#FFD700'}
            />
            <Text
              style={{fontSize: 14, marginTop: 5, color: theme.colors.border}}>
              {t('showMap')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChatDetail');
            }}
            style={Styles.chatButton}>
            <Icon name="chat" color={theme.colors.bgColor} />
          </TouchableOpacity>
        </View>
        <Text style={Styles.description}>{homeData.description}</Text>
        {homeData.rooms?.length === 0 ? (
          <View style={{height: 400}}>
            <Nodata title={'No Rooms Available in \n this Hotel'} />
          </View>
        ) : (
          homeData.rooms.map(item => {
            return (
              <View style={Styles.tabCont}>
                <View style={Styles.descriptionCont}>
                  <View style={Styles.tabTitle}>
                    <Text
                      style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
                      {item.name}
                    </Text>
                    <Text style={{color: theme.colors.darkBlue}}>
                      {currency}
                      {'  '}
                      {currency === 'USD'
                        ? item.price
                        : item.price * dollar}/ {t('night')}{' '}
                    </Text>
                  </View>
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
                    <Text
                      style={{color: 'black', marginLeft: moderateScale(10)}}>
                      {item.bed_type}
                    </Text>
                  </View>
                  <View style={Styles.descripTabs}>
                    <Image
                      style={Styles.iconImage}
                      resizeMode="contain"
                      source={require('../../../images/roomSize.png')}
                    />
                    <Text
                      style={{color: 'black', marginLeft: moderateScale(10)}}>
                      {t('roomSize')} {item.room_size}
                    </Text>
                  </View>
                  <View style={Styles.animityTab}>
                    <Text style={{color: 'black'}}>{t('amenityAvail')}</Text>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        {item.flat_screen && (
                          <View style={Styles.amentiesTab}>
                            <View style={Styles.amentiesIcon}>
                              <Icon size={14} name="tv" color={'green'} />
                            </View>
                            <Text style={Styles.amentyText}>
                              {t('flatscreen')}
                            </Text>
                          </View>
                        )}
                        {item.city_view && (
                          <View style={Styles.amentiesTab}>
                            <View style={Styles.amentiesIcon}>
                              <Icon
                                size={13}
                                name="city"
                                type="font-awesome-5"
                                color={'green'}
                              />
                            </View>
                            <Text style={Styles.amentyText}>
                              {t('cityView')}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={Styles.scndLine}>
                    {item.gym && (
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
                    {item.bathtub && (
                      <View style={Styles.amentiesTab}>
                        <View style={Styles.amentiesIcon}>
                          <Icon
                            size={14}
                            name="bath"
                            color={'green'}
                            type="font-awesome-5"
                          />
                        </View>
                        <Text style={Styles.amentyText}>{t('bathTub')}</Text>
                      </View>
                    )}
                    {item.free_wifi && (
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
                    {item.breakfast && (
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
                    {item.kitchenette && (
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
                    {item.beach_view && (
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
                  {item.state === 'RESERVED' ? (
                    <View
                      onPress={() => {}}
                      style={[Styles.manageButton, {width: '55%'}]}>
                      <Icon
                        name="hard-drive"
                        type="feather"
                        color={theme.colors.border}
                      />
                      <Text style={{marginLeft: 10, color: 'white'}}>
                        {t('alreadyReserved')}
                      </Text>
                    </View>
                  ) : checkInDate !== t('selectCheckin') &&
                    checkOutDate !== t('selectCheckout') ? (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(finalReservation(item));
                        navigation.navigate('FinalReservation', {
                          checkinDate: checkInDate,
                          checkoutDate: checkOutDate,
                        });
                      }}
                      style={Styles.manageButton}>
                      <Icon
                        name="hard-drive"
                        type="feather"
                        color={theme.colors.border}
                      />
                      <Text style={{marginLeft: 10, color: 'white'}}>
                        {t('Reserve')}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={Styles.checkBox}>
                      <TouchableOpacity
                        onPress={() => {
                          showDatePicker();
                          setType('Checkin');
                        }}
                        style={[Styles.manageButton, {width: '48%'}]}>
                        <Icon
                          name="hard-drive"
                          type="feather"
                          color={theme.colors.border}
                          size={12}
                        />
                        <Text
                          style={{
                            marginLeft: 10,
                            color: 'white',
                            fontSize: 12,
                          }}>
                          {checkInDate}
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          showDatePicker();
                          setType('Checkout');
                        }}
                        style={[Styles.manageButton, {width: '48%'}]}>
                        <Icon
                          name="hard-drive"
                          type="feather"
                          color={theme.colors.border}
                          size={12}
                        />
                        <Text
                          style={{
                            marginLeft: 10,
                            color: 'white',
                            fontSize: 12,
                          }}>
                          {checkOutDate}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            );
          })
        )}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReservationPage;
