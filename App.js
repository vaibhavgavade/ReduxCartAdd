import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './Route';
import {Provider} from 'react-redux';
import store from './src/store/Index';

export default class App extends Component  {
  render(){
    return (
      <Provider store={store}>
           <AppStack/>
      </Provider>
   
    )

  }
}

