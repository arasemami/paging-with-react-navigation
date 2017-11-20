 

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,

} from 'react-native';
 
import {  StackNavigator, } from 'react-navigation';
import Login from './src/pages/login'
import Signup from './src/pages/signup'

 class HomeScreen extends React.Component {
  static  navigationOptions = { 
    header: null ,
 
  };
 
  render() {
    const { navigate } = this.props.navigation;

   
    return (
    <View style={styles.continer} >
     <TouchableOpacity style={styles.buttonContiner} onPress={() => navigate('Login') } >
       <Text style={styles.buttonText} >Login</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.buttonContiner} onPress={() => navigate('Register')  } >
       <Text style={styles.buttonText} >Sign Up</Text>
     </TouchableOpacity>
 
    </View>
    );
  }
}



class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign up  ',
    header: null ,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     <Signup />
     
    );
  }
}



class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login  ',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     <Login />
     
    );
  }
}

 


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register : {screen: RegisterScreen},
  

}


);




export default class rnapp extends Component {
  render() {
    return  (
          <App />
    );
  }
}

const styles = StyleSheet.create({
  continer:{
     
    backgroundColor:'#00acc1',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  buttonContiner:{
    backgroundColor:'#007c91',
    width:300,
    borderRadius:25,
    paddingVertical :14,
    marginVertical:10,


  },
  buttonText:{
    fontSize:16,
    fontWeight:'700',
    color:'#ffffff',
    textAlign:'center',


},
        

});

AppRegistry.registerComponent('rnapp', () => rnapp);
