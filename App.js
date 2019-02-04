import React from 'react';
import { ScrollView, StyleSheet, Text, ImageBackground, View } from 'react-native';
import posed from 'react-native-pose';
import LingoCard from './components/LingoCard';
import LottieView from 'lottie-react-native';


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

       <ScrollView contentContainerStyle={{ flexGrow:1, flexDirection:'column'}}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
       >
       <View style={{flex:1,backgroundColor:'#fff', borderBottomWidth:1,  borderColor: '#d6d7da', flexDirection:'row'}}>
              <Text style={{textAlign:'center', fontSize:50}}>Angrezi.life</Text>
       </View>
        <LingoCard title={"Story"} backColor={"#f20"}/>
        <LingoCard title={"Test"} backColor={"#f3f3a5"}/>
        <LingoCard title={"Punctuation"} backColor={"#123456"}/>
        <LingoCard title={"Reading"} backColor={"#f34aec"}/>
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
  },
});
