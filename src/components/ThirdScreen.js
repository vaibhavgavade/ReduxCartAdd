import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Products from '../components/Products';
import {books} from '../../Data'




export default class ThirdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text > ThirdScreen </Text>
        <Products products={books}/>
    
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})