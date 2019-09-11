import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from './src/components/ThirdScreen';
import ShoppingCarticon from './src/components/ShoppingCarticon'


const Appstack = createStackNavigator({
    first:{
        screen:FirstScreen,
        navigationOptions:{
            headerTitle:'Shopping App',
            headerBackTitle:null,
         headerRight:(
             <ShoppingCarticon/>
           
         )

        }
    },
    second:{
        screen:SecondScreen,
        navigationOptions:{
            headerTitle:'Electronics'
        }
    },
    third:{
        screen:ThirdScreen
    }
})

export default createAppContainer(Appstack)