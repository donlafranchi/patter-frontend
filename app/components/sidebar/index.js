import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,
	Left, Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from "react-redux";

// import appActions from '../../store/app/action';

import TopBar from '../topbar';

import { primary_color, dark_primary_color } from '../../../styleConsts';
import styles from './styles';

class SideBar extends React.Component {
	render() {
		const { Resource, navigate } = this.props;

		// var navigation = this.props.navigation;

		let static_menus = ['info', 'faq', 'about'];
		// let menu_items = Resource.menu || {}, menu = [];
		// for(let key in menu_items) {
		// 	menu.push({
		// 		key: key,
		// 		...menu_items[key]
		// 	})
		// }
		// menu.sort((a, b) => (a.order > b.order));
		let menu = [
			{
				'key' : 'home',
				'text' : 'Home'
			},
			{
				'key' : 'profile',
				'text' : 'Profile'
			}
		];

		return (
			<Container style={styles.sideBar_content}>
				<LinearGradient colors={[primary_color, dark_primary_color]} style={{ height: '100%' }} >
					<TopBar menuPress={this.props.menuPress} />
					<Content style={{ height: '100%' }}>
						<List>
							{menu.map(menu_item => {
								return (
									<ListItem style={styles.listitem} key={menu_item.key} >
										<TouchableOpacity style={styles.listitem_button}
												onPress={() => {
													navigate(menu_item.key);
													this.props.menuPress();
												}} >
											<Text style={styles.listitem_text} >
												{menu_item.text}
											</Text>
										</TouchableOpacity>
									</ListItem>
								)
							})}
						</List>
					</Content>
				</LinearGradient>
			</Container>
		);
	}
}

export default SideBar;
