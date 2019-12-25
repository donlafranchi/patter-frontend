import {Platform, Dimensions, StatusBar, StyleSheet} from 'react-native';


var primary_color = '#11A0B2';
var dark_primary_color = '#095059';
var gray_color = '#F5F5F5';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

var isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
	isIPhoneX = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT;
}

var s_height = 0;
var androidMarginTop = 0;

if (Platform.OS === 'ios') {
	s_height = isIPhoneX ? 44 : 20;
} else {
	s_height = StatusBar.currentHeight;
	androidMarginTop = s_height;
}

var g_padding = 16;

const g_styles = StyleSheet.create({
	button: {
		width: '100%',
		backgroundColor: primary_color,
		borderRadius: 20,
		height: 45,
		marginBottom: g_padding
	},
	button_text: {
		width: '100%',
		color: '#fff',
		textAlign: 'center'
	},
	back_to_home: {
		marginBottom: g_padding
	},
	back_to_home_text: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: primary_color,
		marginTop: g_padding
	}
});

export {
	primary_color,
	dark_primary_color,
	s_height,
	androidMarginTop,
	gray_color,
	g_styles,
	g_padding
}
