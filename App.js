import React from 'react';
import { ScrollView, StyleSheet, Text,TouchableOpacity, Image, ImageBackground, View } from 'react-native';
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'http://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
       <ScrollView contentContainerStyle={{ flexGrow:1, flexDirection:'column'}}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
       >
       <View style={{flex:1.2,backgroundColor:'#fff', borderBottomWidth:1, borderColor: '#d6d7da', flexDirection:'row'}}>
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
  TouchableOpacityStyle: {
    zIndex: 2,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    
 },
 FloatingButtonStyle: {
  resizeMode: 'contain',
  width: 50,
  height: 50,
},
});
