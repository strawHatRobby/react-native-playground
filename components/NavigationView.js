import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ChatScreen from '../screens/ChatScreen'
import Dummy from './DummyComponent';
const TabNavigator = createBottomTabNavigator({
    Home: MainScreen,
    Dummy: Dummy,
    Chat: ChatScreen
}, {
    tabBarOptions: {
        style: {
            height: '11%'
        }
    }

});

export default createAppContainer(TabNavigator);
