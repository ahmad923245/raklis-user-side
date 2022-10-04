import { Icon } from '@rneui/base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import BackButton from '../../../components/backButton';
import { theme } from '../../../theme/theme';
import Styles from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
let img = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80'



const Maps = ({ navigation }) => {
  const { t } = useTranslation();


  let data = [
    {
      title: 'Test 1',
      lat: 33.666058,
      lng: 73.154000,
      image: img
    },
    {
      title: 'Test 2',
      lat: 33.665594,
      lng: 73.150309,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'
    },
    {
      title: 'Test 4',
      lat: 33.662629,
      lng: 73.149365,
      image: 'https://www.investopedia.com/thmb/yykxeXgS1D1U8NHWKTbWo0jaMRA=/680x440/filters:fill(auto,1)/houses_and_land-5bfc3326c9e77c0051812eb3.jpg'
    },
    {
      title: 'Test 14',
      lat: 33.662951,
      lng: 73.151382,
      image: 'https://cdn.pixabay.com/photo/2017/06/19/04/11/house-2418110_960_720.jpg'
    }
  ]








  return (
    <SafeAreaView
      style={{
        height: theme.size.height,

      }}>
      <View style={[Styles.header,]}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={Styles.headerTextCont}>
          <Icon name="location-pin" color={theme.colors.border} />
          <Text style={[Styles.headerText]}>{t('maps')}</Text>
        </View>
        <Icon
          name="dots-three-vertical"
          type="entypo"
          color={'transparent'}
          size={theme.fontSize.normal}
        />
      </View>


      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 33.665594,
          longitude: 73.150309,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >

        {
          data.map(mark => (
            <Marker
              key={mark.title}
              title={mark.title}
              coordinate={{
                latitude: mark.lat,
                longitude: mark.lng
              }}

            >
              <View
                style={{
                  // borderWidth:1,
                  // borderColor:'red',
                  height: 50,
                   width: 50,
                   borderRadius:50/2
                }}
              >
                <Image
                  style={{ height: 50, width: 50,borderRadius:50/2 }}
                  source={{ uri: mark.image }} />

              </View>
            </Marker>


          ))
        }


      </MapView>




    </SafeAreaView>
  );
};
export default Maps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    // ...StyleSheet.absoluteFillObject,
  },
});