import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style = {styles.background} source={require("../assets/background.jpg")}>
            <View style={styles.header}>
                <Text style = {styles.headerText}>
                    Recovery Time
                </Text>
            </View>

            <View style={styles.subheader}>
                <Text style = {styles.subheaderText}>
                    Recovery Starts Now
                </Text>
            </View>
            
            <View style={styles.loginButton}>
                <Text style = {styles.baseText}>
                    Login
                </Text>
            </View>

            <View style={styles.signUpButton}>
                <Text style = {styles.baseText}>
                    Sign Up
                </Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    headerText: {
        fontSize: 40,
        color: "#7fffd4",
    },
    header: {
        width: "100%",
        height: 70,
        justifyContent: "flex-start",
        alignItems: "center",
        left: 0,
        top: 200,
        position: "absolute",
    },
    subheaderText: {
        fontSize: 20,
        color: "#7fffd4",
    },
    subheader: {
        width: "100%",
        height: 70,
        justifyContent: "flex-start",
        alignItems: "center",
        left: 0,
        top: 500,
        position: "absolute",
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