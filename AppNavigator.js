import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Home from './src/screen/Home';

const  AppNavigator = createStackNavigator({
    Login:{screen: Login},
    Register:{screen: Register},
    Home:{screen: Home},
});


  
  const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;