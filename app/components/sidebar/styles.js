import { StyleSheet } from 'react-native';

import { primary_color } from '../../../styleConsts';

const styles = StyleSheet.create({
	sidebar_content: {
		width : 100
	},
	listitem: {
		borderBottomWidth: 0
	},
	listitem_button: {
		flex: 1,
	},
	listitem_wrapper: {
		alignSelf: 'flex-start'
	},
	listitem_text: {
		color: '#fff',
		alignSelf: 'flex-start'
	}
});

export default styles;
