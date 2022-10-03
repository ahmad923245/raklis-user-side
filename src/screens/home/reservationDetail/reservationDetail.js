import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackButton from '../../../components/backButton';
import {moderateScale} from '../../../constants/moderateScale';
import Styles from './styles';
import {Icon} from '@rneui/base';
import {theme} from '../../../theme/theme';
import {apiKey} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  confirmReservation,
  homeLoad,
  rejectReservation,
} from '../../../redux/actions/home';
import ShowSnackBar from '../../../components/SnackBar';
import {Loading} from '../../../components/Loading';
import {useTranslation} from 'react-i18next';

const ReservationDetail = ({navigation, route}) => {
  const {t} = useTranslation();

  const {data} = route.params;
  const [show, setShow] = useState(data.state === 'RESERVED' ? false : true);
  const [uid, setUid] = useState(data.uid);

  const dispatch = useDispatch();
  const {homeLoading, dollar, currency} = useSelector(state => state.home);

  const confirm = () => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    formdata.append('reservation_uid', uid);
    dispatch(homeLoad(true));
    dispatch(confirmReservation(formdata, confirmSuccess));
  };

  const reject = () => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    formdata.append('reservation_uid', uid);
    dispatch(homeLoad(true));
    dispatch(rejectReservation(formdata, rejectSuccess));
  };

  const confirmSuccess = data => {
    data && ShowSnackBar('Reservation Confirmed Succesfully', 'green');
    setShow(false);
  };

  const rejectSuccess = data => {
    data && ShowSnackBar('Reservation Rejected Succesfully', 'green');
    setShow(false);
  };

  return (
    <SafeAreaView>
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
          <Text style={Styles.headerText}> {t('Booking')} </Text>
        </View>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.scrollView}>
        <Text style={Styles.reserve}>
          {t('Reservation')}{' '}
          <Text style={Styles.reserveNo}>{data.reservation_id}</Text>
        </Text>

        <View style={Styles.nameDetail}>
          <Text style={{color: 'black'}}>{data.room.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Icon name="print" type="entypo" color={theme.colors.border} />
            <Text
              style={{
                color: theme.colors.border,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              Print
            </Text> */}
          </View>
        </View>
        <View style={[Styles.nameDetail, {alignItems: 'flex-start'}]}>
          <Text style={{color: 'black'}}>
            {data.user.name}
            {/* <Text style={{color: theme.colors.lightBlue}}> 17:00</Text> */}
          </Text>
          <Text style={{color: theme.colors.border}}>
            {t('phoneno')}
            <Text style={{color: theme.colors.lightBlue}}>
              {data.user.phone}
            </Text>
          </Text>
        </View>
        <View style={Styles.ticketCont}>
          <Text style={Styles.ticket}>{t('Ticket')}</Text>
          <View style={Styles.passportCont}>
            <Icon name="camera" type="entypo" color={theme.colors.white} />
            <Text style={Styles.passportText}>{t('idPass')}</Text>
          </View>
        </View>
        <View style={Styles.descriptionCont}>
          <Text style={{color: 'black'}}>{data.room.name}</Text>
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
              {data.room.bed_type}
            </Text>
          </View>
          <View style={Styles.descripTabs}>
            <Image
              style={Styles.iconImage}
              resizeMode="contain"
              source={require('../../../images/roomSize.png')}
            />
            <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
              {t('roomSize')} {data.room.room_size}
            </Text>
          </View>
          <View style={Styles.animityTab}>
            <Text style={{color: 'black'}}>{t('amenityAvail')}</Text>
            <View style={{flexDirection: 'row'}}>
              {data.room.flat_screen && (
                <View style={Styles.amentiesTab}>
                  <View style={Styles.amentiesIcon}>
                    <Icon size={14} name="tv" color={'green'} />
                  </View>
                  <Text style={Styles.amentyText}>{t('flatscreen')}</Text>
                </View>
              )}
              {data.room.city_view && (
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
          <View style={Styles.scndLine}>
            {data.room.gym && (
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
            {data.room.bathtub && (
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
            {data.room.free_wifi && (
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
          </View>
          <View style={Styles.scndLine}>
            {data.room.kitchenette && (
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
            {data.room.bathtub && (
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
            {data.room.breakfast && (
              <View style={Styles.amentiesTab}>
                <View style={Styles.amentiesIcon}>
                  <Icon
                    size={14}
                    name="fastfood"
                    color={'green'}
                    type="material-icons"
                  />
                </View>
                <Text style={Styles.amentyText}>{t('Breakfast')}</Text>
              </View>
            )}
          </View>

          <View style={Styles.descripTabs}>
            <Image
              style={Styles.iconImage}
              resizeMode="contain"
              source={require('../../../images/fullname.png')}
            />
            <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
              {data.user.name}
            </Text>
          </View>
          <View style={Styles.descripTabs}>
            <Image
              style={Styles.iconImage}
              resizeMode="contain"
              source={require('../../../images/phone.png')}
            />
            <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
              {data.user.phone}
            </Text>
          </View>
          <View style={Styles.descripTabs}>
            <Image
              style={Styles.iconImage}
              resizeMode="contain"
              source={require('../../../images/emailIcon.png')}
            />
            <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
              {data.user.email}
            </Text>
          </View>

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
              {data.check_in_date}
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
              {data.check_out_date}
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
            {data.nights} {t('nights')}
          </Text>
        </View>
        <View style={[Styles.descripTabs, {marginTop: 3}]}>
          <Text
            style={{
              color: theme.colors.darkBlue,
              fontSize: moderateScale(18),
            }}>
            {currency}{' '}
            {currency === 'USD' ? data.room.price : data.room.price * dollar}{' '}
            {data.room.price} / {t('night')}
          </Text>
        </View>
        <Text style={Styles.resevationText}>RESERVATION NUMER : A0005SR2</Text>
        <View style={{height: moderateScale(50)}}></View>
      </ScrollView>
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default ReservationDetail;
