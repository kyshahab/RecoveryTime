import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar, } from 'react-native';

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

    const profilePress = () => {
        navigation.navigate('Profile');
    }
    const activityPress = () => {
        navigation.navigate('Activity');
    }

    return (
        <ScrollView contentContainerStyle = {{flexGrow: 1, justifyContent: 'center'}}>
            
            <SafeAreaView style={styles.container}>

                <View style = {styles.textView}>
                    <Text style = {styles.text}>Today's Trend</Text>
                    <TouchableOpacity style={styles.profileButton} onPress={profilePress}>
                        <Text style={styles.profileText}>Your Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.coloredLine1}></View>

                <View style={styles.graph}></View>

                <View style = {styles.line}></View>

                <TouchableOpacity style={styles.textView} onPress={activityPress}>
                    <Text style={styles.buttonText}> See Your Activity                                   > </Text>
                </TouchableOpacity>

                <View style = {styles.line}></View>

                <View style = {styles.textView}>
                    <Text style = {styles.text}>Track Your Patterns</Text>
                </View>

                <View style={styles.coloredLine2}></View>

                <TouchableOpacity style={styles.cravingView} onPress = {cravingPress}>
                    <Text style = {styles.buttonText}>I'm Craving</Text>
                </TouchableOpacity>      

            </SafeAreaView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: StatusBar.currentHeight
    },

    profileButton: {
        width: "35%",
        borderRadius: 25,
        height: "85%",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "15%",
        marginVertical: "0%",
        backgroundColor: "#afeeee",
    },

    line: {
        width: "100%",
        borderRadius: 25,
        height: "0.1%",
        backgroundColor: "lightgray",
    },

    graph: {
        width: "80%",
        borderRadius: 25,
        height: "41%",
        marginTop: 0,
        marginBottom: 30,
        backgroundColor: "lightgray",
    },

    textView: {
        width: "90%",
        borderRadius: 25,
        flexDirection: 'row',
        height: "5%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        marginBottom: 0,
    },

    coloredLine1: {
        width: "40%",
        height: "0.5%",
        alignSelf: "flex-start",
        marginBottom: 20,
        marginHorizontal: "6%",
        backgroundColor: "#7fffd4",
    },
    coloredLine2: {
        width: "54%",
        height: "0.5%",
        alignSelf: "flex-start",
        marginBottom: 20,
        marginHorizontal: "6%",
        backgroundColor: "#7fffd4",
    },

    cravingView: {
        width: "80%",
        borderRadius: 25,
        height: "24%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: "#afeeee",
    },

    buttonText: {
        fontSize: 20,
        fontWeight: '200',
    },

    profileText: {
        fontSize: 12,
        fontWeight: '200',
    },

    text: {
        fontSize: 25,
        fontWeight: '400',
    },
});

export default HomeScreen;