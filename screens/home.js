import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://i.pinimg.com/564x/84/85/9f/84859fa3a395da3ac21fdaad08f53e67.jpg'}}
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>Harhsla</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    // height: 300,
    width: 410,
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100'
  },
  button: {
    width: '100%',
    backgroundColor: '#1a759f',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  }
})