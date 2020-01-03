import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon, Header, Left, Body, Right, Button } from 'native-base';

import styles from './styles';

class TopBar extends React.Component {
	render() {
		return (
			<Header style={styles.topbar}>
				<Left style={{flex: 1}} >
					<TouchableOpacity style={styles.icon_button} onPress={this.props.menuPress} >
						{/*<Icon name="md-menu" style={styles.icon} />*/}
					</TouchableOpacity>
				</Left>
				<Body style={styles.header_body} >
					<Text style={styles.header} numberOfLines={1} >Patter App</Text>
				</Body>
				<Right style={{flex: 1}}>
				</Right>
			</Header>
		)
	}
}

export default TopBar;

