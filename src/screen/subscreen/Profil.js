import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Profil extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>Profil Dashboard</Text>
            </View>
        );
    }
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center'
    }
 });