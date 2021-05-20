import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar, } from 'react-native';
import { LineChart } from "react-native-chart-kit";

function HomeScreen ( {navigation} ) {
    const linedata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2, 
          },
        ],
      };

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

                <View style={styles.graph}>

                <LineChart
                    data={linedata}
                    width={338} 
                    height={300}
                    yAxisLabel={""}
                    chartConfig={{
                      backgroundColor: '#7fffd4',
                      backgroundGradientFrom: '#f0f8ff',
                      backgroundGradientTo: '#7fffd4',
                      decimalPlaces: 2, 
                      color: (opacity = 1) => `rgba(70, 90, 100, ${opacity})`,
                      style: {
                        borderRadius: 25
                      }
                    }}
                    bezier
                    style={{
                      marginVertical: 5,
                      borderRadius: 25,
                    }}
                  />
                </View>

                <View style = {styles.line}></View>

                <TouchableOpacity style={styles.textView} onPress={activityPress}>
                    <Text style={styles.buttonText}> See Your Activity</Text>
                    <Text style={styles.arrow}> {'\u2192'}</Text>
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
        width: "90%",
        height: "41%",
        marginTop: 0,
        marginBottom: 30,
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
        width: "90%",
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
        fontWeight: '300',
    },

    profileText: {
        fontSize: 12,
        fontWeight: '200',
    },

    text: {
        fontSize: 25,
        fontWeight: '400',
    },

    arrow: {
        fontSize: 35,
        fontWeight: '100',
        marginTop: "-3.3%",
        marginLeft: "37%",
    }
});

export default HomeScreen;