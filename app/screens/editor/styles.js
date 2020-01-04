import { StyleSheet } from 'react-native';

import { primary_color, gray_color, g_padding } from '../../../styleConsts';

const styles = StyleSheet.create ({
	page_container : {
		flexDirection : 'column',
		justifyContent : 'space-between',
		height : '100%'
	},
	container : {
		paddingLeft : 10,
		paddingRight : 10
	},
	e_item : {
		margin : 10,
		padding : 5,
		// borderBottomWidth : 1,
		// borderColor : '#2a4944'
	},
	e_label : {
   		fontSize : 16,
   		marginBottom : 10,
   		fontWeight : '500'
   	},
   	e_input : {
   		fontSize : 14,
   		borderColor: 'gray', 
   		borderWidth: 0,
   	},
   	select : {
 		fontSize : 16,
 		margin : 20,
 		alignItems : 'center'
 	},
    name : {
   		// color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 16,
		padding : 20,
		marginTop : 10
   	},
   	desc : {
   		// color: '#2a4944',
		alignSelf: 'flex-start',
		fontSize : 14,
		padding : 20
   	},
	image : {
		width : 370,
		height : 200
   	},
    item: {
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		margin: 2,
		borderColor: '#2a4944',
		borderWidth: 1,
		// backgroundColor: '#d2f7f1'
	},
	item_img : {
		width : 40,
		height : 40,
		borderRadius : 25,
		marginRight : 20
	},
	btn_group : {
		flexDirection : 'row',
		justifyContent : 'space-around',
		alignItems : 'center',
		padding : 10,
		backgroundColor : primary_color
   	},
   	modal_container : {
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    marginTop : 250,
	    marginBottom : 250,
	    height : 200,
 		flex : 1,
 		padding : 20, 
 		backgroundColor : '#ffffff',
 		borderRadius : 6
 	},
 	modal_header : {
 		fontSize : 18,
 		alignItems : 'center',
 		padding : 10,
 		marginBottom : 15,
 		fontWeight : '500'
 	},
	modal_body : {
 		fontSize : 16,
 		alignItems : 'center',
 		padding : 10,
 		marginBottom : 30
 	},
 	backIcon : {
 		margin : 20,
 		width : 20
 	}
})

export default styles;
