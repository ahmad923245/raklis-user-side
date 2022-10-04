import { useFocusEffect } from '@react-navigation/native';
import { color, Icon } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../../components/backButton';
import { Loading } from '../../../components/Loading';
import { apiKey } from '../../../constants/constants';
import { moderateScale } from '../../../constants/moderateScale';
import { updateCallAPIstate } from '../../../redux/actions/auth';
import { getHotels, homeDat, homeLoad } from '../../../redux/actions/home';
import { theme } from '../../../theme/theme';
import { Nodata } from './../../../components/noDataAvailable';
import Styles from './styles';

const data = [
  {
    key: 1,
    name: 'Salam Rotana 1',
  },
  {
    key: 2,
    name: 'Salam Rotana 1',
  },
  {
    key: 3,
    name: 'Salam Rotana 1',
  },
];

const dataBottom = [
  {
    key: 1,
    name: 'Salam Rotana 1',
  },
  {
    key: 2,
    name: 'Salam Rotana 1',
  },
  {
    key: 3,
    name: 'Salam Rotana 1',
  },
];

const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [starCount, setStarCount] = useState(3.5);
  const [hotels, setHotels] = useState([]);

  const dispatch = useDispatch();
  const { homeLoading } = useSelector(state => state.home);
  const { loginData } = useSelector(state => state.auth);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(updateCallAPIstate(false));
      fetchHotels();
    }, [fetchHotels]),
  );

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={Styles.topFlatList}
        onPress={() => {
          handleReplace(item, index);
        }}>
        <Image style={Styles.hotelPics} source={{ uri: item.images[0] }} />
        <Text style={Styles.hotelName}>{item.name}</Text>
        <Text style={Styles.hotelAddres}>Almatar, st Khartoum - sudan</Text>
        <View style={Styles.ratingCont}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={Styles.price}>
              {item.rating.toString().substring(0, 3)}
            </Text>
            <StarRating
              containerStyle={{ width: '40%', marginLeft: 4 }}
              disabled={false}
              maxStars={5}
              rating={item.rating}
              emptyStarColor={theme.colors.border}
              selectedStar={rating => setStarCount(rating)}
              starSize={11}
              fullStarColor={theme.colors.darkBlue}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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

  const handleReplace = async (item, index) => {
    await dispatch(homeDat(item));
    navigation.navigate('HotelDetails', { index: index });
  };

  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <BackButton
          name={'menu'}
          type="entypo"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <View style={Styles.nameProfileCont}>
          <Image
            style={Styles.profile}
            source={require('../../../images/profile.png')}
          />
          <Text style={Styles.name}>Hello {loginData.name} </Text>
        </View>
      </View>
      {hotels?.length === 0 ? (
        <Nodata title={'No Hotels Available'} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ flex: 0.35 }}>
            <View style={Styles.header}>
              <Text style={Styles.title}>{t('hotpkgs')}</Text>
              {/* <Text style={{color: theme.colors.darkBlue}}>View all</Text> */}
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={Styles.topFlat}
              horizontal={true}
              data={hotels}
              keyExtractor={index => index}
              renderItem={renderItem}
            />
          </View>
          <View style={{ flex: 0.65 }}>
            <View style={Styles.header}>
              <Text style={Styles.title}>{t('hotelsAndAparts')}</Text>
              {/* <Text style={{color: theme.colors.darkBlue}}>View all</Text> */}
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                width: theme.size.width,
                alignSelf: 'center',
              }}>
              {hotels?.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      handleReplace(item, index);
                    }}
                    style={Styles.bottomTab}>
                    <Image
                      // resizeMode="contain"
                      style={Styles.bottomHotelPic}
                      source={{ uri: item.images[0] }}
                    />
                    <View
                      style={{
                        marginLeft: 5,
                        width: '50%',
                        justifyContent: 'space-between',
                        paddingVertical: 5,
                      }}>
                      <Text style={Styles.hotelNameBottom}>{item.name}</Text>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                          name="location-pin"
                          type="entypo"
                          color={theme.colors.border}
                          size={12}
                        />
                        <Text style={Styles.hotelAddresBottom}>
                          Ebaid khatim, khartoum sudan
                        </Text>
                      </View>
                      {/* <Text style={Styles.priceBottom}>SDG 1650/night</Text> */}
                      <View style={{}}>
                        <View>
                          <View style={{ flexDirection: 'row' }}>
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
                        <View style={Styles.scndLine}>
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
                              <Text style={Styles.amentyText}>
                                {t('Breakfast')}
                              </Text>
                            </View>
                          )}
                          {item.bathtub && (
                            <View style={Styles.amentiesTab}>
                              <View style={Styles.amentiesIcon}>
                                <Icon
                                  size={10}
                                  name="bath"
                                  color={'green'}
                                  type="font-awesome-5"
                                />
                              </View>
                              <Text style={Styles.amentyText}>
                                {t('bathtub')}
                              </Text>
                            </View>
                          )}
                        </View>
                        <View style={Styles.scndLine}>
                          {item.gym && (
                            <View style={Styles.amentiesTab}>
                              <View style={Styles.amentiesIcon}>
                                <Icon
                                  size={12}
                                  name="dumbbell"
                                  color={'green'}
                                  type="font-awesome-5"
                                />
                              </View>
                              <Text style={Styles.amentyText}>{t('Gym')}</Text>
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
                              <Text style={Styles.amentyText}>
                                {t('Kitchen')}
                              </Text>
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
                              <Text style={Styles.amentyText}>
                                {t('beach')}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={Styles.bookButton}
                      onPress={() => {
                        handleReplace(item, index);
                      }}>
                      <Text
                        style={{
                          transform: [{ rotate: '270deg' }],
                          color: 'white',
                          fontSize: 10,
                        }}>
                        {t('booknow')}
                      </Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
              <View style={{ height: moderateScale(50) }}></View>
              <View style={{ height: 50 }}></View>
            </ScrollView>
          </View>
        </View>
      )}
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default HomeScreen;
