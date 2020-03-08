import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation'; 
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Bord from './Bord';
import Employee from './Employee';
import Recap from './Recap';
import Profil from './Profil';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Bord : {
            screen : Bord,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon style={[{color: tintColor}]} size= {25} name={'ios-home'} />
                    </View> 
                ),
            }
        },
        Employee : {
            screen : Employee,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon style={[{color: tintColor}]} size= {25} name={'ios-people'} />
                    </View> 
                ),
                activeColor: '#f0edf6',
                inactiveColor: '#3e2465',
                barStyle:{backgroundColor: '#2163f6'}, 
            }
        },
        Recap : {
            screen : Recap,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon style={[{color: tintColor}]} size= {25} name={'ios-book'} />
                    </View> 
                ),
                activeColor: '#f0edf6',
                inactiveColor: '#3e2465',
                barStyle:{backgroundColor: '#2c6d6a'}, 
            }
        },
        Profile : {
            screen : Profil,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon style={[{color: tintColor}]} size= {25} name={'ios-person'} />
                    </View> 
                ),
                activeColor: '#f0edf6',
                inactiveColor: '#3e2465',
                barStyle:{backgroundColor: 'purple'}, 
            }
        },

    },
    {
        initialRouteName: 'Bord',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle:{backgroundColor: '#694fad'},
    }
 );

 const BarNav = createAppContainer(TabNavigator);

 export default BarNav;