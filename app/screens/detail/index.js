import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, 
	ActivityIndicator } from 'react-native';
import { Button } from 'native-base';

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

		var event = {
			'name' : 'event1',
			'desc' : 'event1 info',
			'image' : 'https://patter.com/img/event1.png'
		}

		return (
			<View>
				<View>
	                <Image
	             		source = {{ uri: event.image }} 
	             		style = {styles.image} />
	                <Text>{event.name}</Text>
	                <Text>{event.desc}</Text>
                </View>
                <ScrollView>
                	{
	                  event.vendors.map((vendor, index) => (
	                     <View key = {vendor.id} style = {styles.vendor}>
	                        <Text>{vendor.name}</Text>
	                        <Text>{vendor.bio}</Text>
	                     </View>
	                  ))
	               }
	            </ScrollView>
	            <Button
		         onPress = {this.handleRemindMe}
		         title = "Remind Me of Event"
		         color = "Green"
		      	/>
	         </View>
		)
	}
}

export default Detail;
