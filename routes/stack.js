import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import LoginScreen from '../app/screens/LoginScreen';
import SignUpScreen from '../app/screens/SignUpScreen';
import HomeScreen from '../app/screens/HomeScreen';
import ProfileScreen from '../app/screens/ProfileScreen';
import ActivityScreen from '../app/screens/ActivityScreen';

const screens = {
    Welcome: {
        screen: WelcomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: SignUpScreen
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {headerShown: false},
    },
    Profile: {
        screen: ProfileScreen,
    },
    Activity: {
        screen: ActivityScreen,
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);