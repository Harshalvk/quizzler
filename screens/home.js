import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Title from '../components/title'



const Home = ({navigation}) => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://i.pinimg.com/564x/84/85/9f/84859fa3a395da3ac21fdaad08f53e67.jpg'}}
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 410,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  }
})