import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://i.pinimg.com/564x/84/85/9f/84859fa3a395da3ac21fdaad08f53e67.jpg'}}
          style={styles.banner}
          resizeMode='contain'
          />
      </View>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 410,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});