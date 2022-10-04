import React from 'react';
// import AppLovinMAX from 'react-native-applovin-max';

import MainNav from './src/navigation/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import i18n from './src/constants/languages/i18n';


export default App = () => {
  // AppLovinMAX.initialize(
  //   'A-9kTvOkDZ-qwU9XS2_569ZH63dK3tysrcfnwR9FPJB-G4II6l1b5zKGgUMJyVT4a3E8KSoMfin9fitBw2V5DI',
  //   configuration => {
  //     // SDK is initialized, start loading ads
  //   },
  // );

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};
// import React, {useEffect, useState} from 'react';
// import {Button, TextInput} from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App = () => {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   function onAuthStateChanged(user) {
//     console.log(user);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => {
//           console.log('+923202230867');
//           signInWithPhoneNumber('+923157289008');
//         }}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// };

// export default App;
