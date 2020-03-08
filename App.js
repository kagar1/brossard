import React from 'react';
import { Text, View } from 'react-native';
import AppContainer from './AppNavigator';
import Barnav from './src/screen/Home';
import {db} from './src/Firebaseconnexion';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
        
    );
  }
  
}


