import { StyleSheet } from 'react-native';

import { primary_color, s_height, androidMarginTop } from '../../../styleConsts';

const styles = StyleSheet.create({
	topbar: {
		marginTop: androidMarginTop,
		backgroundColor: primary_color,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	icon: {
		color: '#fff'
	},
	header_body: {
		flex: 5,
		justifyContent: 'center',
		marginLeft: s_height
	},
	header: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default styles;
