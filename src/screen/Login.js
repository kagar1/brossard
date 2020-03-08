import React from 'react';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';

export default class Login extends React.Component{
    state = {
        email : '',
        password:'',
    }
    render(){
        return (
          <View style={styles.container}>
    
            <Text>Welcome To BroManager 1 </Text>
            <Input 
              placeholder = "Enter your email.."
              label = "Email"
              onChangeText={email => this.setState({email})}
              value ={this.state.email}
            />
    
            <Input 
              placeholder = "Enter your password.."
              label = "Password"
              secureTextEntry
              onChangeText = {password => this.setState({password})}
              value = {this.state.password}
            />
            <Button 
              children ="Log in"
            />
            <Text style={styles.link} onPress={()=>this.props.navigation.navigate('Register')}>Create An Account</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center'
    },
    link:{
      color: 'blue',
      fontWeight: '700',
      fontSize:15,
      marginVertical: 20,
      
    }
  });