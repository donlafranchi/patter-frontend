import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, Button, TextInput, 
	ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import { connect } from "react-redux";
import styles from './styles';
import { g_styles } from '../../../styleConsts';
import RNPickerSelect from 'react-native-picker-select';
import apis from '../../apis';
import DatePicker from 'react-native-datepicker';
import {
	EVENT_CREATED
} from '../../store/actionTypes';
import Modal from "react-native-modal";


const mapStateProps = state => ({
	...state.edtor,
	venues : state.home.venues
})

const mapDispatchToProps = dispatch => ({
	onCreate: (payload) => 
		dispatch({type : EVENT_CREATED, payload})
})

class Editor extends React.Component {

	constructor() {
		super();

		this.state = {
			name : '',
			description : '',
			background : '',
			url : '',
			date : '',
			sale_date : '',
			category : '',
			reach : '',
			venue  : '',
			created_by : 1,
			isModalVisible : false
		}

		this.createEvent = () => {
			if(this.state.name !== '' && this.state.category !== '' 
				&& this.state.date !== '' && this.state.venue !== ''
				&& this.state.reach !== '' && this.state.Url !== '')
				{
					var event = this.state;
					delete event.isModalVisible;
					if(event.description === '')
						delete event.description;
					if(event.background === '')
						delete event.background;
					if(event.sale_date === '')
						delete event.sale_date;
					else
						event.sale_date = event.sale_date + 'T00:00'
					event.date = event.date + 'T00:00';
					this.props.onCreate(apis.Events.create(event));
					this.props.navigation.navigate('home');
				}
			else
				this.setState({ isModalVisible: !this.state.isModalVisible });
		}

		this.toggleModal = () =>  {
			this.setState({ isModalVisible: !this.state.isModalVisible });
		}

		this._onChange = (item) => {
			this.setState({ category : item });
		}

		this.onChangeReach = (reach) => {
			this.setState({reach : reach})
		}

		this.onChangeVenue = (venue) => {
			this.setState({ venue : venue });
		}
	}

	componentDidUpdate() {

	}

	render() {

		var navigation = this.props.navigation;

		const items = [
			{ label: 'Artsy', value:'artsy' },
			{ label: 'Boozey', value: 'boozey' },
			{ label: 'Charity', value: 'charty' },
			{ label: 'Craftsy', value: 'craftsy' },
			{ label: 'Foody', value: 'foody' },
			{ label: 'Musicy', value: 'musicy' },
			{ label: 'Petsy', value: 'petsy' }
		];

		var venues = [];

		this.props.venues && this.props.venues.map(venue => {
			venues.push({
				label : venue.name,
				value : venue.id
			})
		})

		return (
			<View style={styles.page_container}>
				<View>
					<Icon name="arrow-back" 
						onPress={ () => navigation.navigate('home')}
						style={styles.backIcon} />
				</View>
				<ScrollView style={ styles.container }>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Name</Text>
						<TextInput
							style={styles.e_input}
							onChangeText={text => this.setState({ name : text })}
							value={ this.state.name }
							placeholder="(required)"
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Description</Text>
						<TextInput
							style={styles.e_input}
							onChangeText={text => this.setState({ description : text })}
							value={ this.state.description }
							placeholder="(optional)"
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Background</Text>
						<TextInput
							style={styles.e_input}
							onChangeText={text => this.setState({ background : text })}
							value={ this.state.background }
							placeholder="(optional)"
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Category</Text>
						<RNPickerSelect
							onValueChange={this._onChange}
							placeholder={{ label : "(required)" }}
							items={items}
							style={ styles.select }
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Date</Text>
						<DatePicker
							date={this.state.date}
							mode="date"
							placeholder="(required)"
							format="YYYY-MM-DD"
							minDate="2000-01-01"
							maxDate="2100-01-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0,
								},
								dateInput: {
									left : 0,
									position : 'absolute',
									marginLeft: 36,
									borderWidth : 0
								},
							}}
							onDateChange={(date) => {this.setState({date: date})}}
						  />
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Sale Date</Text>
						<DatePicker
							date={this.state.sale_date}
							mode="date"
							placeholder="(optional)"
							format="YYYY-MM-DD"
							minDate="2000-01-01"
							maxDate="2100-01-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
									dateIcon: {
									position: 'absolute',
									left: 0,
									top: 4,
									marginLeft: 0,
								},
									dateInput: {
									left : 0,
									position : 'absolute',
									marginLeft: 36,
									borderWidth : 0
								},
							}}
							onDateChange={(date) => {this.setState({ sale_date: date})}}
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Url</Text>
						<TextInput
							style={styles.e_input}
							onChangeText={text => this.setState({ url : text })}
							value={ this.state.url }
							placeholder="(required)"
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Reach</Text>
						<RNPickerSelect
							onValueChange={this.onChangeReach}
							placeholder={{ label : "(required)" }}
							items={[
									{ label: 'Local', value:'local' },
									{ label: 'Regional', value:'regional' },
									{ label: 'National', value:'national' }
								]}
							style={ styles.select }
						/>
					</View>
					<View style={ styles.e_item}>
						<Text style={ styles.e_label }>Venue</Text>
						<RNPickerSelect
							onValueChange={this.onChangeVenue}
							placeholder={{ label : "(required)" }}
							items={venues}
							style={ styles.select }
						/>
					</View>
				</ScrollView>
				<View style = {styles.btn_group}>
					<Button
						onPress = {this.createEvent}
						title = "Create"
						color = "#ffffff"
					/>
				</View>
				<Modal isVisible={this.state.isModalVisible}
					style = { styles.modal_container }>
					<View >
						<Text style={ styles.modal_header }>Please fill all the required fields</Text>
					</View>
					<Button title="Ok" onPress={this.toggleModal} />
				</Modal>
			 </View>
		)
	}
}

export default connect(mapStateProps, mapDispatchToProps)(Editor);

