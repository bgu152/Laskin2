import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {
  const [resultText, setResultText] = React.useState('Result: ');
  const [number1, setNumber1 ]=React.useState(null);
  const [number2, setNumber2 ]=React.useState(null);
  const [result, setResult] = React.useState(null);
  const [history, setHistory] = React.useState('History\n');
  const addition = ()=>{
    const num=parseInt(number1)+parseInt(number2);
    setResult(num);
    setResultText('Result: ' + num);
    setHistory(history + number1 + ' + ' + number2 +  ' = ' + num + '\n');
  }
  const subtraction = () => {
    const num=parseInt(number1)-parseInt(number2);
    setResult(num);
    setResultText('Result: ' + num);
    setHistory(history + number1 + ' - ' + number2 + ' = ' + num + '\n');
  }

  return (
    <View style={styles.outerContainer}>
    <View style={styles.inputContainer}>
      <Text>{resultText}</Text>
      <TextInput 
      style ={styles.input}
      onChangeText ={setNumber1}
      placeholder ="number 1"
      keyboardType="numeric"/>
      <StatusBar style="auto" />
      <TextInput 
      style ={styles.input}
      onChangeText ={setNumber2}
      placeholder ="number 2"
      keyboardType="numeric"/>
      <StatusBar style="auto" />
    </View>
    <View style={styles.buttonContainer}>
    <Button  title = " + "   onPress = {addition}  />
    <Button title = " - "  onPress = {subtraction} />   
    </View>
    <Text>{history}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  
  inputContainer: {
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    
    flexDirection:'row',
    justifyContent: 'space-between',
     width: 80, 
    height: 40,
  },
    
});
