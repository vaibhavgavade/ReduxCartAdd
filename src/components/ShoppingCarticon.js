import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import {connect} from 'react-redux';


const ShoppingCarticon= (props) => (
    <View style={Styles.Container}>
        <View style={Styles.secondContainer}>
                <Text style={Styles.textSyles}>{props.cartItems.length}</Text>
        </View>
       
        <Ionicons  name='md-cart' size={30}/>
    </View>
);

const mapStateToProps=(state)=>{
    return{
        cartItems:state
    }
}

export default connect(mapStateToProps)(ShoppingCarticon);

const Styles = StyleSheet.create({
    Container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5
    },
    secondContainer:{
        position:'absolute',
        height:30,
        width:30,
        borderRadius:15,
        backgroundColor:'#3cb371',
        right:15,
        bottom:15,
        alignItems:'center',
        justifyContent:'center',
         zIndex:2000

    },
    textSyles:{
        color:'white',
        fontWeight:'bold'
    }
})
