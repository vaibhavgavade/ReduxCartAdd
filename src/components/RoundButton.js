import React from 'react';
import { TouchableOpacity ,StyleSheet,Text} from 'react-native';

const RoundButton = (props) => (
    <TouchableOpacity style={Styles.Container} onPress={props.onPress}>
      <Text>{props.children}</Text> 
    </TouchableOpacity>
);


export default RoundButton;
const Styles= StyleSheet.create({
    Container:{
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:150,
        height:41,
        borderRadius:20
    }
})