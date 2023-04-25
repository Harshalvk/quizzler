import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Imagin this is a really cool question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Cool option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cool option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Result")}>
          <Text>END</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  title: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  button: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})