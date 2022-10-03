import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/backButton';
import {Loading} from '../../../components/Loading';
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';
import Styles from './styles';

const Ticket = ({navigation, route}) => {
  const {t} = useTranslation();

  const {data} = route.params;
  const {finalReserve, homeLoading} = useSelector(state => state.home);
  const {loginData} = useSelector(state => state.auth);

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
          <Text style={Styles.headerText}> {t('ticket')}</Text>
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
                {data.checkInDate}
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
                {data.checkOutDate}
              </Text>
            </View>
          </View>

          <Text style={{marginVertical: 20, color: 'black'}}>
            {t('idPassText')}{' '}
          </Text>

          <View style={Styles.descripTabs}>
            <Text
              style={{
                color: theme.colors.darkBlue,
                fontSize: moderateScale(18),
              }}>
              {t('nights')}
            </Text>

            <Text
              style={{
                color: theme.colors.darkBlue,
                marginLeft: moderateScale(10),
                fontSize: moderateScale(18),
              }}>
              {data.nights} Nights
            </Text>
          </View>

          <View style={[Styles.descripTabs, {marginTop: 3}]}>
            <Text
              style={{
                color: theme.colors.darkBlue,
                fontSize: moderateScale(18),
              }}>
              {t('total')} {data.price}
            </Text>
          </View>
          <Text style={Styles.resevationText}>
            RESERVATION NUMER : A0005SR2
          </Text>
          <View style={{height: moderateScale(30)}}></View>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default Ticket;
