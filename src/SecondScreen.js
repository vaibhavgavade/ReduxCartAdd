import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import RoundButton from '../src/components/RoundButton';
import {electronics} from '../Data'
import Products from '../src/components/Products';
import {connect}from 'react-redux';


class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
 

  render() {
    return (
      <View style={Styles.container}>
        <Text> SecondScreen </Text>
        <Products products={electronics} onPress={this.props.addItemToCart}/>
        <RoundButton onPress={()=>this.props.navigation.navigate('third')}>GoThird</RoundButton>
       
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addItemToCart:(product)=>dispatch({type:'ADD_TO_CART',payload:product})
  }
}

export default connect(null,mapDispatchToProps)(SecondScreen);
const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})