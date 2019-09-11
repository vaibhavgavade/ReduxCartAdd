import React, { Component } from 'react';
import { View, Text,StyleSheet,Button} from 'react-native';

 class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  renderProductsItem=(products)=>{
    console.log(products)
    return products.map((item)=>{
      return(
        <View style={{padding:10}}>
          {/* <Text>{item.name}</Text> */}
          <Button onPress={() => this.props.onPress(item)} title={item.name + " - " + item.price} />
        </View>
      )
    })
  }
  
  render() {
  return (
    <View style={Styles.Container}>
        {this.renderProductsItem(this.props.products)}
      </View>
    );
  }
}

export default Products;



const Styles=StyleSheet.create({
  Container:{
  
    justifyContent:'center',
    alignItems:'center'
  }
})