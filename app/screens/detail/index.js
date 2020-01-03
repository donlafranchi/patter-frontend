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

		var navigation = this.props.navigation;

		var event = navigation.getParam('event') || [];

		event.vendors = [
				{
					'id' : '1',
					'name' : 'David Green',
					'description' : 'I am looking for good events everyday',
					'url' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsGHRGXsU-6or1SNOW4gaLcnem87x-zWO77XcmnCzFZEBhQo8&s'
				},
				{
					'id' : '2',
					'name' : 'Sabeli Joe',
					'description' : 'Quality Assurance',
					'url' : 'https://image.flaticon.com/icons/png/512/206/206881.png'
				}
			]

		return (
			<View>
                <ScrollView style={ styles.container }>
	                <View style = { styles.event_detail } >
		                <Image
		             		source = {{ uri: event.url }} 
		             		style = {styles.image} />
		                <Text style={ styles.name }>{event.name}</Text>
		                <Text style={ styles.desc }>{event.description}</Text>
	                </View>
                	{	
	                  event.vendors && event.vendors.map((vendor, index) => (
	                  	<TouchableOpacity key = {vendor.id} style = {styles.item}
		                     	onPress={() => { navigation.navigate('profile', 
		                     	{vendor : vendor})
	                     	}}>
							<Image
			             		source = {{ uri: vendor.url }} 
			             		style = {styles.item_img} />
		             		<View>
								<Text>{vendor.name}</Text>
								<Text>{vendor.description}</Text>
							</View>
                     	</TouchableOpacity>
	                  ))
	               }
	            </ScrollView>
	            <View style = {styles.btn_group}>
		            <Button
				         onPress = {this.handleRemindMe}
				         title = "Remind Me of Event"
				         color = "#ffffff"
			      	/>
		      	</View>
	         </View>
		)
	}
}

export default Detail;
