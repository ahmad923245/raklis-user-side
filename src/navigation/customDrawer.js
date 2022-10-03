import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from '../constants/moderateScale';
import {authLoad, logOut} from '../redux/actions/auth';
import {theme} from '../theme/theme';

const CustomDrawer = ({navigation}) => {
  const {t} = useTranslation();
  const [selectedScreen, setSelectedScreen] = useState('FindHotel');

  const {loginData} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex: 1}}>
      <View style={Styles.header}>
        <View>
          <Image
            style={{width: 50, height: 50, borderRadius: 100}}
            source={require('./../images/profile.png')}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {loginData.name}
          </Text>
          {/* <Text style={{color: theme.colors.border}}>Manager</Text> */}
        </View>
      </View>

      <ScrollView
        style={{
          width: '90%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: theme.colors.border,
            marginVertical: moderateScale(15),
          }}>
          {t('bookin')}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('FindHotel');
            navigation.navigate('FindHotel');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="search"
            type="feather"
            color={
              selectedScreen === 'FindHotel'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'FindHotel'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('findHotel')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.tabs}
          onPress={() => {
            setSelectedScreen('Home');
            navigation.navigate('Home');
          }}>
          <Icon
            style={{width: 25}}
            name="hotel"
            type="font-awesome-5"
            color={
              selectedScreen === 'Home'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={{
              color:
                selectedScreen === 'Home'
                  ? theme.colors.darkBlue
                  : theme.colors.border,
              marginLeft: moderateScale(10),
              fontWeight: 'bold',
            }}>
            {t('hotels')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.tabs}
          onPress={() => {
            setSelectedScreen('Booking');
            navigation.navigate('Booking');
          }}>
          <Icon
            style={{width: 25}}
            name="hard-drive"
            type="feather"
            color={
              selectedScreen === 'Booking'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={{
              color:
                selectedScreen === 'Booking'
                  ? theme.colors.darkBlue
                  : theme.colors.border,
              marginLeft: moderateScale(10),
              fontWeight: 'bold',
            }}>
            {t('previosBook')}
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Calender');
            navigation.navigate('Calendar');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="calendar"
            type="entypo"
            color={
              selectedScreen === 'Calender'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Calender'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t("Calender")}
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Chat');
            navigation.navigate('Chat');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="chat-bubble-outline"
            type="material-icons"
            color={
              selectedScreen === 'Chat'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Chat'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Chat')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Maps');
            navigation.navigate('Maps');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="location-pin"
            type="material-icons"
            color={
              selectedScreen === 'Maps'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Maps'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Maps')}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: theme.colors.border,
            marginVertical: moderateScale(15),
          }}>
          {t('MANAGEMENT')}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Language');
            navigation.navigate('Setting');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="globe"
            type="font-awesome"
            color={
              selectedScreen === 'Language'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Language'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Language')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Currency');
            navigation.navigate('Setting');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="dollar"
            type="fontisto"
            color={
              selectedScreen === 'Currency'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Currency'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Currency')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('Setting');
            navigation.navigate('Setting');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="gear"
            type="font-awesome"
            color={
              selectedScreen === 'Setting'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Setting'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('setting')}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: theme.colors.border,
            marginVertical: moderateScale(15),
          }}>
          {t('SUPPORT')}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('ContactUs');
            navigation.navigate('ContactUs');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="phone"
            type="font-awesome"
            color={
              selectedScreen === 'ContactUs'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'ContactUs'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Contactus')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedScreen('ListYourProperty');
            navigation.navigate('ListYourProperty');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="building"
            type="font-awesome"
            color={
              selectedScreen === 'ListYourProperty'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'ListYourProperty'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('listTitle')}
          </Text>
        </TouchableOpacity>
        <View style={{height: 20}}></View>
        <TouchableOpacity
          onPress={() => {
            dispatch(logOut(false));
            dispatch(authLoad(false));
            navigation.replace('Login');
          }}
          style={[Styles.tabs]}>
          <Icon
            style={{width: 25}}
            name="logout"
            color={
              selectedScreen === 'Setting'
                ? theme.colors.darkBlue
                : theme.colors.border
            }
          />
          <Text
            style={[
              Styles.tabName,
              {
                color:
                  selectedScreen === 'Setting'
                    ? theme.colors.darkBlue
                    : theme.colors.border,
              },
            ]}>
            {t('Logout')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(25),
  },
  tabs: {
    flexDirection: 'row',
    marginLeft: 25,
    alignItems: 'center',
    marginTop: 8,
  },
  tabName: {
    color: theme.colors.darkBlue,
    marginLeft: moderateScale(10),
    fontWeight: 'bold',
  },
});
export default CustomDrawer;
