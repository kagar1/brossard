import React from 'react';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import { StyleSheet, Text, View, TextInput, Linking, Alert } from 'react-native';
import {db} from '../Firebaseconnexion';

var addItem = (name, email, password) => {
    db.ref('/admin').push({
        name: name,
        email: email,
        password:password,
        
    })
    alert("user add successfuly");
    this.props.navigation.navigate('Home');
}
export default class Register extends React.Component{
    state = {
        name: '',
        email:'',
        password:'',
    }
    render(){
        return(
            <View style={styles.container}>
                <Text> Register Page registre</Text>
                
                <Input 
                placeholder = "Enter your name.."
                label = "Name"
                value = {this.state.name}
                onChangeText = {name=>this.setState({name})}
                />
        
                <Input 
                placeholder = "Enter your email.."
                label = "Email"
                value = {this.state.email}
                onChangeText = {email=>this.setState({email})}
                />

                <Input 
                placeholder = "Enter your Password.."
                label = "Password"
                value = {this.state.password}
                onChangeText = {password=>this.setState({password})}
                secureTextEntry
                />
                <Input 
                placeholder = "Confirm your Password.."
                label = "Confirm Password"
                secureTextEntry
                />

                <Button 
                children ="Register"
                onPress = {()=>(addItem(this.state.name, this.state.email, this.state.password))}
                />
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