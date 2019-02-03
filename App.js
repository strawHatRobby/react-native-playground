import React from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground, View } from 'react-native';
import posed from 'react-native-pose';
import LingoCard from './components/LingoCard';

const Box = posed.View({
  visible: {
    opacity: 1,
    transition: { duration: 300 }
  }
});

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       <ScrollView contentContainerStyle={{ flexGrow:1, flexDirection:'column'}}>
        <LingoCard title={"Story"} backColor={"#fff"}/>
        <LingoCard title={"Test"} backColor={"#fff"}/>
        <LingoCard title={"Punctuation"} backColor={"#fff"}/>
        <LingoCard title={"Reading"} backColor={"#fff"}/>
        <LingoCard title={"Reading"} backColor={"#fff"}/>
        </ScrollView>
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
    paddingVertical: 20
  },
});
