import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeholder,secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label} </Text>
            <TextInput
                autoCorrect = {false}
                onChangeText = {onChangeText}
                placeholder={placeholder}
                
                secureTextEntry = {secureTextEntry}
                value = {value}
                style ={styles.input}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container : {
        
        marginTop: 20,
        width: '100%',
        borderColor: '#333',
        borderBottomWidth:2,
    },

    label : {
        padding: 5,
        paddingBottom:0,
        color: '#333',
        fontSize:15,
        fontWeight: '700',
        width: '100%',
    },

    input : {
        paddingRight : 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color : '#333',
        fontSize:18,
        fontWeight: '700',
        width: '100%',
    }
});

export {Input};