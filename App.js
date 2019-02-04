//Main Librarires
import React from 'react';
import { ScrollView, StyleSheet, Text,TouchableOpacity, Dimensions, Image, ImageBackground, View } from 'react-native';

//third-party component and libraries
import posed from 'react-native-pose';

//Personal components and libraries
import FloatingButton from './components/floatingButton';
import AppScroll from './components/AppScroll';

//try out libraries







export default class App extends React.Component {
  
  render() {
    return (
       <View style={styles.container}>
          
      
      <FloatingButton/>
      <AppScroll/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
  },
});
