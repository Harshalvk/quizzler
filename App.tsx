import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import MyStack from './navigation'

const App = () => {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
})