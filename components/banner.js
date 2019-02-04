import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions,ImageBackground, TouchableOpacity } from 'react-native';

import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
  "http://hdqwalls.com/wallpapers/purple-landscape-scenery-minimalist-4k-8y.jpg",
  "https://i.pinimg.com/originals/2c/ba/a6/2cbaa6ea08706b054b8d34fe19baa514.png",
  "https://cdn.clipart.email/c4351d0fd7f7898aa02be141eea80772_wallpaper-wolf-howling-moon-silhouette-minimal-4k-creative-_3840-2160.jpeg"
];

export default class Banner extends Component {
    
    constructor(props){
    super(props);
    this.state = {
        
    }
  }

  renderPage(image, index) {
    return (
        <View key={index}>
            <ImageBackground style={{ backgroundColor: 'black',borderRadius:5, marginBottom:'2%',width: BannerWidth, height: 200 }} source={{ uri: image }} >
            <View style={{flex:1, flexDirection: 'column', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{textAlign:'center', fontSize:40, color:'#fff', marginTop:'2%', marginBottom:'0.5%'}}>Alacrity</Text>
                <Text style={{textAlign:'center', fontSize:15, color:'#fff',  marginHorizontal:'10%'}}>
Someone with alacrity shows cheerful willingness and eager behavior, like a kid whose mother has told him he can buy anything in a candy store.
</Text>
                </View>
            </ImageBackground>
        </View>
    );
  }
    
	render(){
		return(
			<Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
          >
              {images.map((image, index) => this.renderPage(image, index))}
          </Carousel>
			)
	}
}
