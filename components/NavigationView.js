import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import Dummy from './DummyComponent';
const TabNavigator = createBottomTabNavigator({
    Home: MainScreen,
    Dummy: Dummy,
}, {
    tabBarOptions: {
        style: {
            height: '11%'
        }
    }

});

export default createAppContainer(TabNavigator);
