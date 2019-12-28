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
			'image' : 'https://blog.hubspot.com/hubfs/Sales_Blog/best-real-estate-websites.jpg',
			'vendors' : [
				{
					'id' : '1',
					'fullname' : 'David Green',
					'desc' : 'I am looking for good events everyday',
					'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsGHRGXsU-6or1SNOW4gaLcnem87x-zWO77XcmnCzFZEBhQo8&s'
				},
				{
					'id' : '2',
					'fullname' : 'Sabeli Joe',
					'desc' : 'Quality Assurance',
					'image' : 'https://image.flaticon.com/icons/png/512/206/206881.png'
				}
			]
		}

		return (
			<View>
                <ScrollView style={ styles.event_detail_container }>
	                <View style = { styles.eventDetail } >
		                <Image
		             		source = {{ uri: event.image }} 
		             		style = {styles.image} />
		                <Text style={ styles.event_name }>{event.name}</Text>
		                <Text style={ styles.event_desc }>{event.desc}</Text>
	                </View>
                	{
	                  event.vendors.map((vendor, index) => (
	                  	<TouchableOpacity key = {vendor.id} style = {styles.vendor}
		                     	onPress={() => { navigate('profile');}}>
							<Image
			             		source = {{ uri: vendor.image }} 
			             		style = {styles.vendor_img} />
		             		<View>
								<Text>{vendor.fullname}</Text>
								<Text>{vendor.desc}</Text>
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
