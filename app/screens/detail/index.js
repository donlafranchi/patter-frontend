import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, 
	ActivityIndicator } from 'react-native';
// import { Button } from 'native-base';

import styles from './styles';
import { g_styles } from '../../../styleConsts';

class Detail extends React.Component {

	constructor() {
		super();

		this.handleRemindMe = () => {
			// remind action here
		}
	}

	componentDidUpdate() {
	}

	render() {

		var navigate = this.props.navigation.navigate;

		var event = {
			'name' : 'event1',
			'desc' : 'event1 info',
			'image' : 'https://patter.com/img/event1.png',
			'vendors' : [{
				'id' : '1',
				'fullname' : 'David Green',
				'desc' : 'user info',
				'image' : 'https://patter.com/img/event1.png'
			}]
		}

		return (
			<View>
				<View style = { styles.eventDetail } >
	                <Image
	             		source = {{ uri: event.image }} 
	             		style = {styles.image} />
	                <Text>{event.name}</Text>
	                <Text>{event.desc}</Text>
                </View>
                <ScrollView>
                	{
	                  event.vendors.map((vendor, index) => (
	                  	<TouchableOpacity key = {vendor.id} style = {styles.vendor}
		                     	onPress={() => { navigate('profile');}}>
							<View>
								<Text>{vendor.fullname}</Text>
								<Text>{vendor.desc}</Text>
							</View>
                     	</TouchableOpacity>
	                  ))
	               }
	            </ScrollView>
	            <Button
		         onPress = {this.handleRemindMe}
		         title = "Remind Me of Event"
		         color = "#f194ff"
		      	/>
	         </View>
		)
	}
}

export default Detail;
