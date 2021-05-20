import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Navigator from './routes/stack'


export default function App() {
  return <Navigator />;
}