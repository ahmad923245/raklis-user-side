import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../../theme/theme';
import {Icon} from '@rneui/base';
import Styles from './styles';
import BackButton from '../../../components/backButton';
import {Nodata} from '../../../components/noDataAvailable';
import {apiKey} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {homeLoad, userReservation} from '../../../redux/actions/home';
import {Loading} from '../../../components/Loading';
import {useFocusEffect} from '@react-navigation/native';


const Bookings = ({navigation}) => {
  const {loginData} = useSelector(state => state.auth);
  const {homeLoading} = useSelector(state => state.home);
  const [roomData, setRoomData] = useState([]);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      fetchReservation();
    }, []),
  );

  const fetchReservation = () => {
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    formdata.append('user_uid', loginData.uid);
    dispatch(homeLoad(true));
    dispatch(userReservation(formdata, success));
  };

  const success = data => {
    console.log(data);
    setRoomData(data.reservations);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.header}>
        <BackButton
          onPress={() => {
            navigation.toggleDrawer();
          }}
          name="menu"
          type="entypo"
        />
        <View style={Styles.headerTextCont}>
          <Icon name="book" type="font-awesome" color={theme.colors.border} />
          <Text style={Styles.headerText}> Booking</Text>
        </View>
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={theme.colors.border}
          size={theme.fontSize.normal}
        />
      </View>

      {roomData?.length === 0 ? (
        <Nodata title={'No Bookings'} />
      ) : (
        <ScrollView>
          {roomData.map(item => {
            console.log(item.room.avatar);
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ReservationDetail', {data: item});
                }}
                style={Styles.tabCont}>
                <Image
                  style={{width: 50, height: 50, borderRadius: 100}}
                  source={require('../../../images/noImage.png')}
                />
                <View style={Styles.tabMid}>
                  <Text style={Styles.reserve}>
                    Reservation{' '}
                    <Text style={Styles.reserveNo}>{item.reservation_id}</Text>
                  </Text>
                  <Text style={Styles.studio}>{item.room.name}</Text>
                  <Text style={Styles.time}>{item.check_in_date}</Text>
                </View>
                <View style={Styles.tabLast}>
                  <Text>{item.state}</Text>
                  <Icon
                    name="dot-single"
                    type="entypo"
                    color={theme.colors.lightBlue}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default Bookings;
