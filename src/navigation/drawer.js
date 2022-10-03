import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './customDrawer';
import HomeScreen from '../screens/home/homeScreen/homeScreen';
import Chat from '../screens/home/chat/chat';
import ChatDetail from '../screens/home/chatDetail/chatDetail';
import CheckIn from '../screens/home/checkIn/checkIn';
import ContactUs from '../screens/home/contactUs/contactUs';
import FinalReservation from '../screens/home/finalReservation/finalReservation';
import FindHotel from '../screens/home/findHotel/findHotel';
import ReservationPage from '../screens/home/reservationPage/reservationPage';
import HotelDetails from '../screens/home/hotelDetails/hotelDetails';
import ListYourProperty from '../screens/home/listYourProperty/listYourProperty';
import Ticket from '../screens/home/ticket/ticket';
import Maps from '../screens/home/maps/maps';
import Calendar from '../screens/home/calendar/calendar';
import Setting from '../screens/home/setting/setting';
import Bookings from '../screens/home/booking/bookings';
import ReservationDetail from '../screens/home/reservationDetail/reservationDetail';
import FilterHotels from '../screens/home/filteredHotel/filterHotel';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FindHotel"
      screenOptions={{headerShown: false}}
      backBehavior={'history'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* <Drawer.Screen name="CheckIn" component={CheckIn} /> */}
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="ChatDetail" component={ChatDetail} />
      <Drawer.Screen name="FinalReservation" component={FinalReservation} />
      <Drawer.Screen name="ReservationPage" component={ReservationPage} />
      <Drawer.Screen name="FindHotel" component={FindHotel} />
      <Drawer.Screen name="HotelDetails" component={HotelDetails} />
      <Drawer.Screen name="ListYourProperty" component={ListYourProperty} />
      <Drawer.Screen name="Ticket" component={Ticket} />
      <Drawer.Screen name="Maps" component={Maps} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Booking" component={Bookings} />
      <Drawer.Screen name="FilteredHotel" component={FilterHotels} />
      <Drawer.Screen name="ReservationDetail" component={ReservationDetail} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
