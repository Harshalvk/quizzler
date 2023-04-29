import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async() => {
    const url='https://opentdb.com/api.php?amount=10&category=9&type=multiple&encode=url3986';
    const res= await fetch(url);
    const data= await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
  }
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress=() => {
    setQues(ques+1);
  }

  return (
    
    <View style={styles.container}>
      
      {questions&&
      <View style={styles.parent}>
        <View style={styles.title}>
          <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)} </Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>Cool option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>Cool option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>Cool option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.option}>Cool option 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>

      {ques!==9 && 
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
      }
      
      {ques==9 && 
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text style={styles.buttonText}>SHOW RESULT</Text>
          </TouchableOpacity>
      } 
        </View>
      </View>
      }
    </View>
  )
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: '100%',
  },
  title: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  buttom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1a759f',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },  
  question: {
    fontSize: 22,
    color: 'black',
  },
  option: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34a0a4',
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  parent: {
    height: '100%',
  }
})