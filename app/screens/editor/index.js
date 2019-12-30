import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class Editor extends React.Component {

	constructor() {
		super();

		this.createEvent = () => {
			// remind action here
		}
	}

	componentDidUpdate() {
	}

	render() {

		var navigate = this.props.navigation.navigate;

		return (
			<View>
                <ScrollView style={ styles.container }>
	                
	            </ScrollView>
	            <View style = {styles.btn_group}>
		            <Button
				         onPress = {this.createEvent}
				         title = "Create"
				         color = "#ffffff"
			      	/>
		      	</View>
	         </View>
		)
	}
}

export default Editor;
