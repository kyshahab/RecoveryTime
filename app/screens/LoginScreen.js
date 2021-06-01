import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native';
import { set } from "react-native-reanimated";

function LoginScreen( {navigation} ) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [incorretLogin, setIncorrectLogin] = useState(false);
    
    const signUpPress = () => {
        navigation.navigate('Register');
    }

    const loginPress = () => {
        // check if user and password exist and are correct,
        // login if true, keep what I have if false
        if (user == "kameron" && password == "dog") {
            console.log("HI")
            navigation.navigate('Home');
        }
        else {
            setIncorrectLogin(true);
            setUser("");
            setPassword("");
        }
    }
    return (
        <ScrollView contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}>
            <SafeAreaView style={styles.container}>
      
                <Image style={styles.image} source={require("../assets/clock.jpg")} />
                <StatusBar style="auto" />

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={false}
                        onChangeText={(user) => setUser(user)}
                    />
                </View>
   
                <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
                </View>
   
                <TouchableOpacity onPress = {signUpPress}>
                    <Text style={styles.signUpButton}>No Account? Sign Up Here!</Text>
                </TouchableOpacity>

                <View style={styles.errorView}>
                    {incorretLogin ? <Text style={styles.errorText}>Incorect Username or Password. Try Again.</Text> : null}
                </View>
   
                <TouchableOpacity style={styles.loginBtn} onPress = {loginPress}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </ScrollView>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
    },
   
    image: {
        flex: 1,
        width: "50%",
        height: "50%",
        marginBottom: 20,
        resizeMode: "contain",
    },
   
    inputView: {
        backgroundColor: "#7fffd4",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
   
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },

    errorView: {
        width: "100%",
        height: 45,
        marginBottom: 0,
        alignItems: "center",
      },

    errorText: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        color: "red",
    },

    signUpButton: {
        height: 30,
        marginTop: 20,
        marginBottom: 10,
    },
   
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 60,
        backgroundColor: "#afeeee",
    },
  });

export default LoginScreen;