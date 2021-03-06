import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

function SignUpScreen( {navigation} ) {
    const [user, setUser] = useState("");
    const [pass, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userTaken, setUserTaken] = useState(false);
    const [passwordsDifferent, setPasswordsDifferent] = useState(false);

    const loginPress = () => {
        navigation.navigate('Login');
    }
    
    const addUser = async () => {  
        const data = { 
            username: user, 
            password: pass
        };
        let json = null;
        try {
            let response = await fetch('temp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data).toString()
            });
            json = await response.json()
        }
        catch (err) {
            console.log(err);
            json = {};
        }
        return json.error;
    }

    const signUpPress = () => {
        addUser().then(error => {
            if (error != null) {
                setPasswordsDifferent(false);
                setUserTaken(true);
            }
            else if (pass != confirmPassword) {
                setUserTaken(false);
                setPasswordsDifferent(true);
            }
            else {
                setUserTaken(false);
                setPasswordsDifferent(false);
                console.log(user + " signed up.");
                navigation.navigate("Login")
            }
        });
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
                        onChangeText={(pass) => setPassword(pass)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    />
                </View>
   
                <TouchableOpacity onPress = {loginPress}>
                    <Text style={styles.loginButton}>Already Have An Account? Login Here!</Text>
                </TouchableOpacity>

                <View style={styles.errorView}>
                    {userTaken ? <Text style={styles.errorText}>Username Taken. Please Try A Different Name.</Text> : null}
                    {passwordsDifferent ? <Text style={styles.errorText}>Passwords Don't Match.</Text> : null}
                </View>

                <TouchableOpacity style={styles.signUpButton} onPress = {signUpPress}>
                    <Text>SIGN UP</Text>
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
    },
   
    image: {
        flex: 1,
        width: "50%",
        height: "50%",
        marginBottom: 40,
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

    loginButton: {
        height: 30,
        marginTop: 20,
        marginBottom: 10,
    },
   
    signUpButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
        backgroundColor: "#afeeee",
    },
  });

export default SignUpScreen;