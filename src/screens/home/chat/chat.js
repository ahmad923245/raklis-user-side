import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import Styles from './styles';
import {theme} from '../../../theme/theme';
import BackButton from '../../../components/backButton';
import {apiKey} from '../../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {
  conversations,
  homeLoad,
  storeConversation,
} from '../../../redux/actions/home';
import {Nodata} from '../../../components/noDataAvailable';
import {Loading} from '../../../components/Loading';
import moment from 'moment';
import {updateCallAPIstate} from '../../../redux/actions/auth';
import {useTranslation} from 'react-i18next';
import translate from 'translate-google-api';
import i18next from 'i18next';

const Chat = ({navigation}) => {
  const {t} = useTranslation();

  const [userConvo, setUserConvo] = useState([]);
  const [convoData, setConvoData] = useState([]);
  const [users, setUsers] = useState([]);
  const [userNmae, setUserName] = useState('');
  const [senderId, setSenderId] = useState('');

  const {homeLoading} = useSelector(state => state.home);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(updateCallAPIstate(false));
      handleChat();
      dispatch(storeConversation([]));
      dispatch(storeConversation([]));
    }, [handleChat]),
  );

  const dispatch = useDispatch();

  const data = [
    {
      key: 1,
      image: require('../../../images/profile1.png'),
      name: 'Mohammad Haroon',
      resNo: 'B193OE',
      color: 'red',
    },
    {
      key: 5,
      image: require('../../../images/profile2.png'),
      name: 'Mahir Saleem',
      color: 'blue',
      resNo: 'A145XD',
    },
    {
      key: 2,
      image: require('../../../images/profile3.png'),
      name: 'Timothy Jenkins',
      color: 'green',
      resNo: 'U324PL',
    },
    {
      key: 3,
      image: require('../../../images/profile4.png'),
      color: 'blue',
      name: 'Ana long',
      resNo: 'N872VC',
    },
    {
      key: 4,
      image: require('../../../images/profile5.png'),
      name: 'Rania Saleem',
      color: 'green',
      resNo: 'L984KZ',
    },
  ];

  const {loggedIn, loginData} = useSelector(state => state.auth);

  const handleChat = () => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append('__api_key__', apiKey);
    data.append('user_uid', loginData.uid);
    dispatch(homeLoad(true));
    dispatch(conversations(data, success));
  };

  const success = data => {
    console.log('data');
    setConvoData(data);
    console.log('covoarray');

    i18next.language === 'ara'
      ? translated(data.conversations)
      : setUsers(data.conversations);
  };

  const translated = async data => {
    console.log(data);
    const msg = data.map(item => {
      return item.conversations[item.conversations.length - 1].message;
    });
    const tme = data.map(item => {
      return item.conversations[item.conversations.length - 1].time;
    });
    console.log(msg);
    const resultMsg = await translate(msg, {
      tld: 'com',
      to: 'ar',
    });
    console.log(tme);
    const resultTme = await translate(tme, {
      tld: 'com',
      to: 'ar',
    });
    console.log(resultMsg);
    console.log(resultTme);
    let finalconvo = null;

    finalconvo = data.map((item, index) => {
      return {
        avatar: item.avatar,
        name: item.name,
        time: resultTme[index],
        message: resultMsg[index],
        uid: item.uid,
        userName: item.name,
      };
    });
    console.log(finalconvo);
    setUsers(finalconvo);
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
          <Icon name="gears" type="font-awesome" color={theme.colors.border} />
          <Text style={Styles.headerText}> {t('chat')}</Text>
        </View>
        <BackButton
          size={22}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      {users?.length === 0 ? (
        <Nodata title={'No Conversation available'} />
      ) : (
        <View>
          {users?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ChatDetail', {
                    userId: item.uid,
                    userName: item.name,
                  });
                }}
                style={Styles.tabCont}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    borderWidth: 0.5,
                    borderColor: theme.colors.bgColor,
                  }}
                  source={
                    item.avatar === null
                      ? {
                          uri: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                        }
                      : {uri: item.avatar}
                  }
                />
                <View style={{alignItems: 'flex-start', width: '35%'}}>
                  <Text style={Styles.name}>{item.name}</Text>
                  <Text style={Styles.message} numberOfLines={1}>
                    {i18next.language === 'ara'
                      ? item.message
                      : item.conversations[item.conversations.length - 1]
                          .message}
                  </Text>
                </View>
                <View style={Styles.tabLast}>
                  <Icon name="dot-single" type="entypo" color={item.color} />
                  <Text style={{color: theme.colors.border, fontSize: 12}}>
                    {i18next.language === 'ara'
                      ? item.message
                      : item.conversations[item.conversations.length - 1].time}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      <Loading visible={homeLoading} />
    </SafeAreaView>
  );
};

export default Chat;
