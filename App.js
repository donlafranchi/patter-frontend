import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Drawer } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './app/store';
import * as Expo from 'expo';

import SideBar from './app/components/sidebar';
import TopBar from './app/components/topbar';

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
		//	 Roboto: require("native-base/Fonts/Roboto.ttf"),
		//	 Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		//	 Ionicons: require('native-base/Fonts/Ionicons.ttf'),
		//	 FontAwesome: require('native-base/Fonts/FontAwesome.ttf')
		// });
		// this.setState({
		//	 ready: true
		// })
		// setTimeout(() => {
		//	 // Expo.SplashScreen.hide();
		// }, 2000);
	}

	render() {
		// if(!this.state.ready)
			// return null;
		return (
			<Provider store={store}>
				<Drawer
					styles={{mainOverlay: { elevation: 0 }}}
					ref={(ref) => { this.drawer = ref; }}
					content={<SideBar menuPress={() => {
						this.drawer._root.close();
					}} navigate={(route) => {
						this.setState({ route })
					}} style={{ zIndex: 100 }} />}
					onClose={() => {
						this.drawer._root.close();
					}} >
					<TopBar menuPress={() => {
						this.drawer._root.open();
					}} />
					<MainApp />
				</Drawer>
			</Provider>
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
