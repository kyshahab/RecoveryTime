import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
import SignUpScreen from '../app/screens/SignUpScreen';
import HomeScreen from '../app/screens/HomeScreen';

const screens = {
    Welcome: {
        screen: WelcomeScreen,
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: SignUpScreen
    },
    Home: {
        screen: HomeScreen
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);