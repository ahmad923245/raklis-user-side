import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export const CheckConnection = () => {
  return NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    if (state.isConnected) return true;
  });
};
