import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer,
	NavigationActions } from 'react-navigation';
import { Root } from "native-base";
import * as Expo from 'expo';

import HomeScreen from './screens/home';
import Detail from './screens/detail';
import Profile from './screens/profile';

const mainNavigator = createStackNavigator({
	home: HomeScreen,
	detail: Detail,
	profile: Profile,
}, {
	headerMode: 'none',
	initialRouteNames: 'home',
	defaultNavigationOptions: {
		gesturesEnabled: false,
	}
});

const MainApp = createAppContainer(mainNavigator);

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.createLog('Main Page Loaded', '');
	}

	componentWillReceiveProps(nextProps) {
	}

	render() {
		return (
			<Root style={{ flex: 1 }}>
				<MainApp ref={nav => {
					this.navigator = nav;
				}}
				onNavigationStateChange={this.props.onNavChange}>
				</MainApp>
			</Root>
		)
	}
}

export default App;

