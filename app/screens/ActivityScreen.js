import React from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView, StatusBar, TouchableHighlight } from 'react-native';

function WelcomeScreen({ navigation }) {

    const loginPress = () => {
        navigation.navigate('Login');
    }
    const signUpPress = () => {
        navigation.navigate('Register');
    }
    return (
        <ScrollView contentContainerStyle = {{flexGrow: 1, justifyContent: 'flex-end'}}>

            <ImageBackground style = {styles.background} source={require("../assets/background.jpg")}>
                
                <TouchableHighlight onPress = {loginPress}>
                    <View style={styles.loginButton}>
                        <Text style = {styles.baseText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress = {signUpPress}>
                    <View style={styles.signUpButton}>
                        <Text style = {styles.baseText}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableHighlight>

            </ImageBackground>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: StatusBar.currentHeight,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#f0f8ff",
        justifyContent: "center",
        alignItems: "center",
    },

    signUpButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#7fffd4",
        justifyContent: "center",
        alignItems: "center",
    },
    baseText: {
        fontSize: 20,
        fontFamily: "Georgia",
    },
});
export default WelcomeScreen;