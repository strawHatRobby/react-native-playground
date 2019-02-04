//Main Librarires
import React from 'react';
import { ScrollView, StyleSheet, StatusBar, SafeAreaView, Text,TouchableOpacity, Dimensions, Image, ImageBackground, View } from 'react-native';

//third-party component and libraries
import posed from 'react-native-pose';

//Personal components and libraries
import MainScreen from './screens/MainScreen.js'
import NavigationView from './components/NavigationView'

//try out libraries







export default class App extends React.Component {
  
  render() {
    return (
       <View style={{paddingTop:StatusBar.currentHeight, flex:1}}>
      <NavigationView/>
      </View>

    );
  }
}


