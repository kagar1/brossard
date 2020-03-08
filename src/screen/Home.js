 import React from 'react';
 import {View, StyleSheet, Text} from 'react-native';
 import Icon from 'react-native-vector-icons/Ionicons';
 import {createAppContainer} from 'react-navigation'; 
 import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import BarNav from './subscreen/SubRoute';




 export default class Home extends React.Component{
    render(){
        return(
            <BarNav />
                
        );
    }
 }
 

 

  