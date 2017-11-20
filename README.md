# paging-with-react-navigation
to this project we have 3 page Home , Login , Register and you can move on the this pages with react-navigation

![alt text](https://image.ibb.co/nByZa6/Screenshot_1511172258.png) V1





How to start :

1- import {  StackNavigator, } from 'react-navigation';
2- its point is for your page name and screen routs , to this project we have 3 pages and for ot now we have 3 screen.

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register : {screen: RegisterScreen},
  

}


4- make static navigationOptions  for any screen example |: 

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login  ',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
     <Login /> // its my componet you can do some else
     
    );
  }
}


 -------------------------------------------------------------------------------------



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








Thats all <3
