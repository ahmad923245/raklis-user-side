import {Icon} from '@rneui/base';
import React, {useState} from 'react';
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
import {moderateScale} from '../../../constants/moderateScale';
import {theme} from '../../../theme/theme';
import Styles from './styles';

const data = [{key: 1}, {key: 1}, {key: 1}, {key: 1}];

const CheckIn = ({navigation}) => {
  const [starCount, setStarCount] = useState(4);
  const images = [
    require('../../../images/hotelImage.png'),
    require('../../../images/hotel2.jpg'),
  ];
  return (
    <SafeAreaView style={{height: theme.size.height}}>
      <SliderBox autoplay circleLoop images={images} />
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
            <Text style={Styles.name}>Salam Rotana 2</Text>
            <Text style={{fontSize: 14, marginTop: 5}}>Khartoum, Sudan</Text>
          </View>
          <View style={{width: '30%'}}>
            <StarRating
              containerStyle={{width: '100%'}}
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={rating => setStarCount(rating)}
              starSize={20}
              fullStarColor={'#FFD700'}
            />
            <Text
              style={{fontSize: 14, marginTop: 5, color: theme.colors.border}}>
              Show in Maps
            </Text>
          </View>
          <TouchableOpacity
            style={Styles.chatButton}
            onPress={() => {
              navigation.navigate('ChatDetail');
            }}>
            <Icon name="chat" color={theme.colors.bgColor} />
          </TouchableOpacity>
        </View>
        <Text style={Styles.description}>
          This Salam Rotana hotel is 2 km from KRT International Airport and 11
          km from Khartoum bahri, the Alnoor complex.
        </Text>
        <View style={Styles.tabCont}>
          <View style={Styles.descriptionCont}>
            <View style={Styles.tabTitle}>
              <Text style={{color: 'black'}}>Standard Twin Room </Text>
              <Text style={{color: theme.colors.darkBlue}}>
                SDG 2950/night{' '}
              </Text>
            </View>
            <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/couple.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                2 Adults
              </Text>
            </View>
            <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/bed.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                Twin Bed
              </Text>
            </View>
            <View style={Styles.descripTabs}>
              <Image
                style={Styles.iconImage}
                resizeMode="contain"
                source={require('../../../images/roomSize.png')}
              />
              <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                Room Size: 32m
              </Text>
            </View>
            <View style={Styles.animityTab}>
              <Text style={{color: 'black'}}>Available amenities :</Text>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon size={14} name="tv" color={'green'} />
                    </View>
                    <Text style={Styles.amentyText}>Flat-Screen</Text>
                  </View>
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon
                        size={13}
                        name="city"
                        type="font-awesome-5"
                        color={'green'}
                      />
                    </View>
                    <Text style={Styles.amentyText}>City-View</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.scndLine}>
              <View style={Styles.amentiesTab}>
                <View style={Styles.amentiesIcon}>
                  <Icon
                    size={14}
                    name="dumbbell"
                    color={'green'}
                    type="font-awesome-5"
                  />
                </View>
                <Text style={Styles.amentyText}>Gym</Text>
              </View>
              <View style={Styles.amentiesTab}>
                <View style={Styles.amentiesIcon}>
                  <Icon
                    size={14}
                    name="bath"
                    color={'green'}
                    type="font-awesome-5"
                  />
                </View>
                <Text style={Styles.amentyText}>Bathtub</Text>
              </View>
              <View style={Styles.amentiesTab}>
                <View style={Styles.amentiesIcon}>
                  <Icon
                    size={14}
                    name="wifi"
                    type="font-awesome-5"
                    color={'green'}
                  />
                </View>
                <Text style={Styles.amentyText}>Wifi</Text>
              </View>
            </View>
            <View style={Styles.checkBox}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomEditing');
                }}
                style={Styles.manageButton}>
                <Icon
                  name="hard-drive"
                  type="feather"
                  color={theme.colors.border}
                />
                <Text style={{marginLeft: 10, color: 'white'}}>Check In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RoomEditing');
                }}
                style={Styles.manageButton}>
                <Icon
                  name="hard-drive"
                  type="feather"
                  color={theme.colors.border}
                />
                <Text style={{marginLeft: 10, color: 'white'}}>Check Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {data.map(item => {
          return (
            <View style={Styles.tabCont}>
              <View style={Styles.descriptionCont}>
                <View style={Styles.tabTitle}>
                  <Text style={{color: 'black'}}>Standard Twin Room </Text>
                  <Text style={{color: theme.colors.darkBlue}}>
                    SDG 2950/night{' '}
                  </Text>
                </View>
                <View style={Styles.descripTabs}>
                  <Image
                    style={Styles.iconImage}
                    resizeMode="contain"
                    source={require('../../../images/couple.png')}
                  />
                  <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                    2 Adults
                  </Text>
                </View>
                <View style={Styles.descripTabs}>
                  <Image
                    style={Styles.iconImage}
                    resizeMode="contain"
                    source={require('../../../images/bed.png')}
                  />
                  <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                    Twin Bed
                  </Text>
                </View>
                <View style={Styles.descripTabs}>
                  <Image
                    style={Styles.iconImage}
                    resizeMode="contain"
                    source={require('../../../images/roomSize.png')}
                  />
                  <Text style={{color: 'black', marginLeft: moderateScale(10)}}>
                    Room Size: 32m
                  </Text>
                </View>
                <View style={Styles.animityTab}>
                  <Text style={{color: 'black'}}>Available amenities :</Text>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={Styles.amentiesTab}>
                        <View style={Styles.amentiesIcon}>
                          <Icon size={14} name="tv" color={'green'} />
                        </View>
                        <Text style={Styles.amentyText}>Flat-Screen</Text>
                      </View>
                      <View style={Styles.amentiesTab}>
                        <View style={Styles.amentiesIcon}>
                          <Icon
                            size={13}
                            name="city"
                            type="font-awesome-5"
                            color={'green'}
                          />
                        </View>
                        <Text style={Styles.amentyText}>City-View</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.scndLine}>
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon
                        size={14}
                        name="dumbbell"
                        color={'green'}
                        type="font-awesome-5"
                      />
                    </View>
                    <Text style={Styles.amentyText}>Gym</Text>
                  </View>
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon
                        size={14}
                        name="bath"
                        color={'green'}
                        type="font-awesome-5"
                      />
                    </View>
                    <Text style={Styles.amentyText}>Bathtub</Text>
                  </View>
                  <View style={Styles.amentiesTab}>
                    <View style={Styles.amentiesIcon}>
                      <Icon
                        size={14}
                        name="wifi"
                        type="font-awesome-5"
                        color={'green'}
                      />
                    </View>
                    <Text style={Styles.amentyText}>Wifi</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RoomEditing');
                  }}
                  style={Styles.manageButton}>
                  <Icon
                    name="hard-drive"
                    type="feather"
                    color={theme.colors.border}
                  />
                  <Text style={{marginLeft: 10, color: 'white'}}>Reserve</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckIn;
