import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, TextInput, Button, SafeAreaView, } from 'react-native';

function HomeScreen ( {navigation} ) {

    const cravingPress = () => {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

        var date = month + "-" + day + "-" + year;
        var t = hours + ":" + minutes + ":" + seconds;
        console.log(date);
        console.log(t);
    }

    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.cravingView} onPress = {cravingPress}>
            <Text>I'm Craving</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },

    cravingView: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 100,
      backgroundColor: "#afeeee",
    },
});

export default HomeScreen;