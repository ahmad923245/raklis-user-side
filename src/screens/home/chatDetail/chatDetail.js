import {Icon} from '@rneui/base';
import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  RefreshControl,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import BackButton from '../../../components/backButton';
import {apiKey} from '../../../constants/constants';
import {
  conversations,
  homeLoad,
  messages,
  sendMessag,
  storeConversation,
} from '../../../redux/actions/home';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import Styles from './styles';
import {authLoad, updateCallAPIstate} from '../../../redux/actions/auth';
import {Loading} from '../../../components/Loading';
import i18next from 'i18next';
import translate from 'translate-google-api';
import {Nodata} from '../../../components/noDataAvailable';

const ChatDetail = ({navigation, route}) => {
  const {userId, userName} = route.params;
  console.log(userId);

  const [msg, setMsg] = useState('');
  const {loginData, callAPI} = useSelector(state => state.auth);
  const {conversation} = useSelector(state => state.home);

  const [color, setColor] = useState('black');
  const [call, setcall] = useState(true);
  const [messagess, setMessages] = useState(conversation);
  const [refreshing, setRefreshing] = useState(false);

  const scrollViewRef = useRef();
  const isFocused = useIsFocused();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(updateCallAPIstate(true));
      dispatch(storeConversation([]));
      fetchConversation();
      // translated();
      BackHandler.addEventListener('hardwareBackPress', backPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backPress);
    }, []),
  );

  const translated = () => {
    translate('I spea Dutch!', {from: 'en', to: 'ar'})
      .then(res => {
        console.log(res);

        //=> true
      })
      .catch(err => {
        console.error(err);
      });
  };
  const backPress = () => {
    dispatch(updateCallAPIstate(false));
    dispatch(storeConversation([]));
    setTimeout(() => {
      fetchConversation();
    }, 15000);
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    if (callAPI === true) {
      handleCallAPI();
    }
  }, []);

  const handleCallAPI = () => {
    fetchConversation();
  };

  const dispatch = useDispatch();
  const {homeLoading} = useSelector(state => state.home);

  const fetchConversation = () => {
    var FormData = require('form-data');
    var formdata = new FormData();
    formdata.append('__api_key__', apiKey);
    formdata.append('user_uid', loginData.uid);
    formdata.append('manager_uid', userId);
    console.log(formdata);
    call && dispatch(homeLoad(true));
    dispatch(messages(formdata, success));
  };

  const success = async data => {
    console.log(data);
    // setConversation(data.conversations[index].conversation);
    dispatch(homeLoad(false));
    const array = data.conversations.map(item => {
      return item.message;
    });
    console.log(array);
    const result = await translate(array, {
      tld: 'com',
      to: 'ar',
    });
    console.log(result);
    let finalconvo = null;

    finalconvo = data.conversations.map((item, index) => {
      return {
        message: result[index],
        time: item.time,
        receiver_uid: item.receiver_uid,
        sender_uid: item.sender_uid,
        uid: item.uid,
      };
    });

    console.log(finalconvo);
    i18next.language === 'ara'
      ? dispatch(storeConversation(finalconvo))
      : dispatch(storeConversation(data.conversations));
    // setMessages(dat);
  };

  const sendMessage = () => {
    setColor('#E2E2E2');
    if (msg === '') {
      null;
    } else {
      console.log(loginData);
      var FormData = require('form-data');
      var data = new FormData();
      data.append('__api_key__', apiKey);
      data.append('sender_uid', loginData.uid);
      data.append('receiver_uid', userId);
      data.append('message', msg);
      console.log(data);
      dispatch(sendMessag(data, successMsg));
      setMsg('');
    }
  };

  const successMsg = data => {
    data && setColor('black');
    fetchConversation();
  };

  const onRefresh = React.useCallback(() => {
    fetchConversation();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.headerCont}>
        <BackButton
          onPress={() => {
            backPress();
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={Styles.headerText}>{userName}</Text>
        </View>
        <Icon name="left" color="transparent" />
      </View>
      <View style={{alignSelf: 'center'}}></View>
      {conversation?.length === 0 ? (
        <View style={{height: 400}}>
          <Nodata title={'No Conversation Available \n with this user'} />
        </View>
      ) : (
        <ScrollView
          ref={scrollViewRef}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          {conversation?.map(item => {
            return item.sender_uid === loginData.uid ? (
              <View style={Styles.msgCont}>
                <View style={Styles.myQuestion}>
                  <Text style={{color: 'black'}}>{item.message}</Text>
                </View>
                <Text style={Styles.time}>{item.time}</Text>
              </View>
            ) : (
              <View style={Styles.questionCont}>
                <View style={Styles.questionTab}>
                  <Text style={{color: 'black'}}>{item.message}</Text>
                </View>
                <Text style={Styles.tixme}>{item.time}</Text>
              </View>
            );
          })}

          <Loading visible={homeLoading} />
          <View style={{height: 100}}></View>
        </ScrollView>
      )}

      <View style={Styles.bottomTypeMsg}>
        <View style={Styles.messageCont}>
          <TextInput
            style={Styles.msgInput}
            placeholder={'Enter Message...'}
            placeholderTextColor={'black'}
            onChangeText={val => {
              setMsg(val);
            }}
            value={msg}
          />
        </View>
        <Icon
          onPress={() => {
            sendMessage();
          }}
          name="send"
          type="feather"
          color={color}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatDetail;
