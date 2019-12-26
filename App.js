import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Drawer } from 'native-base';
import * as Expo from 'expo';

import MainApp from './app/index';

export default class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      route: 'home',
      ready: false
    }
  }

  async componentWillMount() {
    // await Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    //   FontAwesome: require('native-base/Fonts/FontAwesome.ttf')
    // });
    // this.setState({
    //   ready: true
    // })
    // setTimeout(() => {
    //   // Expo.SplashScreen.hide();
    // }, 2000);
  }

  render() {
    // if(!this.state.ready)
      // return null;
    return (
      <MainApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
