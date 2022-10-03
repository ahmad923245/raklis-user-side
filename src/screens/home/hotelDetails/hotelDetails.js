import React, {useDebugValue, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import {theme} from '../../../theme/theme';
import {SliderBox} from 'react-native-image-slider-box';
import BackButton from '../../../components/backButton';
import {moderateScale} from '../../../constants/moderateScale';
import Styles from './styles';
import Button from '../../../components/button';
import {Icon} from '@rneui/base';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import {apiKey} from '../../../constants/constants';
import ShowSnackBar from '../../../components/SnackBar';
import {
  addReview,
  getHotels,
  homeDat,
  homeLoad,
  likeHotel,
} from '../../../redux/actions/home';
import {Loading} from '../../../components/Loading';
import {useTranslation} from 'react-i18next';

const HotelDetails = ({navigation, route}) => {
  const {t} = useTranslation();

  const {loginData} = useSelector(state => state.auth);
  const {homeData, homeLoading} = useSelector(state => state.home);
  const [liked, setLiked] = useState(false);
  const images = [
    require('../../../images/hotelImage.png'),
    require('../../../images/hotel2.jpg'),
  ];
  const [starCount, setStarCount] = useState(0);
  const [review, setReview] = useState('');

  const dispatch = useDispatch();
  const {index} = route.params;

  useEffect(() => {
    setFav();
  }, []);

  const setFav = () => {
    const likeed = homeData.likes?.filter(checkLike);

    function checkLike(item) {
      return item.user_uid === loginData.uid ? true : false;
    }
    setLiked(likeed);
  };
  const handleReview = () => {
    if (starCount === 0) {
      ShowSnackBar('Select the stars');
    } else {
      if (review === '') {
        ShowSnackBar('Please enter the Comments');
      } else {
        var formdata = new FormData();
        formdata.append('__api_key__', apiKey);
        formdata.append('user_uid', loginData.uid);
        formdata.append('hotel_uid', homeData.uid);
        formdata.append('review', review);
        formdata.append('rating', starCount.toString());
        dispatch(homeLoad(true));
        dispatch(addReview(formdata, success));
      }
    }
  };

  const success = data => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    dispatch(homeLoad(true));
    dispatch(getHotels(formdata, successRview));
    setStarCount(0);
    setReview('');
  };

  const successRview = data => {
    console.log(data);
    dispatch(homeDat(data.hotels[index]));
  };

  const handleLike = () => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    formdata.append('hotel_uid', homeData.uid);
    formdata.append('user_uid', loginData.uid);
    console.log(formdata);
    dispatch(homeLoad(true));
    dispatch(likeHotel(formdata, likeSuccess));
  };

  const likeSuccess = () => {
    console.log('ok');
  };

  return (
    <SafeAreaView style={Styles.mainCont}>
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
              console.log(homeData.manager_meta.uid);
              console.log(homeData.manager_meta.name);
              navigation.navigate('ChatDetail', {
                userId: homeData.manager_meta.uid,
                userName: homeData.manager_meta.name,
              });
            }}
            style={Styles.chatButton}>
            <Icon name="chat" color={theme.colors.bgColor} />
          </TouchableOpacity>
        </View>
        <Text style={Styles.description}>{homeData.description}</Text>
        <View style={Styles.priceReviewCont}>
          {/* <View>
            <Text style={Styles.title}>Price</Text>
            <Text style={[Styles.des, {marginTop: 5}]}>SDG {homeData.rooms}</Text>
          </View> */}
          <View>
            <Text style={Styles.title}>{t('review')}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text style={Styles.des}>{homeData.rating}</Text>
              <StarRating
                containerStyle={{width: '40%', marginLeft: 4}}
                disabled={false}
                maxStars={5}
                rating={homeData.rating}
                selectedStar={rating => setStarCount(rating)}
                starSize={11}
                fullStarColor={theme.colors.darkBlue}
              />
            </View>
          </View>
        </View>

        <View style={Styles.aminitiesCont}>
          {/* <Text styles={Styles.aminities}>Aminities</Text>

          <View style={Styles.aminitiesTabCont}>
            <FlatList
              style={{
                width: theme.size.width,
                height: 100,
              }}
              homeData={homeData}
              scrollEnabled={false}
              horizontal={false}
              numColumns={3}
              renderItem={renderItem}
              keyExtractor={index => index}></FlatList>
          </View> */}
          <View style={Styles.animityTab}>
            <Text style={{color: 'black'}}>{t('amenityAvail')}</Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                {homeData.flat_screen && (
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon size={14} name="tv" color={'green'} />
                    </View>
                    <Text style={Styles.amentyText}>{t('flatscreen')}</Text>
                  </View>
                )}
                {homeData.city_view && (
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
            {homeData.gym && (
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
            {homeData.bathtub && (
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
            {homeData.free_wifi && (
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
            {homeData.breakfast && (
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
            {homeData.kitchenette && (
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
            {homeData.beach_view && (
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: theme.size.width,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => {
                setLiked(!liked);
                liked ? null : handleLike();
              }}
              style={[
                Styles.heartButton,
                {backgroundColor: liked ? theme.colors.darkBlue : 'white'},
              ]}>
              <Icon
                name="hearto"
                type="ant-design"
                color={theme.colors.bgColor}
              />
            </TouchableOpacity>
            <Button
              onPress={() => {
                navigation.navigate('ReservationPage');
              }}
              title={t('booknow')}
            />
          </View>
        </View>
        <View style={Styles.line}></View>
        <View style={{width: theme.size.width, alignSelf: 'center'}}>
          <View
            style={{
              width: theme.size.width,
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Text style={{fontSize: theme.fontSize.normal, color: 'black'}}>
              {t('comments')}
            </Text>
          </View>
          <StarRating
            containerStyle={{width: '90%', alignSelf: 'center', marginTop: 10}}
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => setStarCount(rating)}
            starSize={20}
            fullStarColor={'#FFD700'}
          />
          <View style={Styles.inputCont}>
            <Icon
              name="pen"
              type="font-awesome-5"
              color={theme.colors.bgColor}
              size={16}
              style={{marginTop: 5}}
            />
            <TextInput
              style={{
                width: '90%',
                height: '100%',
                color: 'black',
              }}
              placeholder={t('commentPlace')}
              placeholderTextColor={'black'}
              multiline={true}
              value={review}
              onChangeText={val => {
                setReview(val);
              }}
            />
          </View>
          <Button
            size={theme.size.width}
            title={t('add')}
            onPress={() => {
              handleReview();
            }}
          />
          <View
            style={{
              width: theme.size.width,
              alignSelf: 'center',
              marginTop: 40,
            }}>
            <Text style={{fontSize: theme.fontSize.normal, color: 'black'}}>
              {t('reviews')}
            </Text>
          </View>
          {homeData.reviews.map(item => {
            return (
              <View style={Styles.reviewCont}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginLeft: 10, color: 'black'}}>
                      {item.user_name}
                    </Text>
                  </View>
                  <StarRating
                    containerStyle={{width: '30%', marginLeft: 4}}
                    disabled={false}
                    maxStars={5}
                    rating={item.rating}
                    selectedStar={rating => setStarCount(rating)}
                    starSize={11}
                    fullStarColor={theme.colors.darkBlue}
                  />
                </View>
                <Text style={{marginTop: 10, marginLeft: 10, color: 'black'}}>
                  {item.review}{' '}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default HotelDetails;
