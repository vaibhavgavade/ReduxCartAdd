import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import RoundButton from './components/RoundButton'


export default class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <View style={Styles.container}>
        <Text> FirstScreen </Text>
       
        <RoundButton onPress={()=>this.props.navigation.navigate('second')}>Submit</RoundButton>
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