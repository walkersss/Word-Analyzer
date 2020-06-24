import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      vowelWord: ['a','e','i','o','u','A','E','I','O','U'],
      ori:'',
      conso:0,
      vowel:0,
      panjang2:0
    }
  }

  analyzer = () => {
    
    let panjang = this.state.ori.length;
    let alphabet=this.state.ori.split('');
    let vowel2=0, conso2=0;
    for (var x = 0; x < alphabet.length; x++) 
    {
        if (this.state.vowelWord.includes(alphabet[x])) {
        vowel2++;
        this.setState({vowel:vowel2});
        } 
        else {
        conso2++;
        this.setState({conso:conso2});
      }
    }
    this.setState({panjang2:panjang});
    //this.setState({ words: wordcount });
    //this.setState({conso:addConsonents});
  };
  

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>Word Analizador</Text>
        </View>

        <View style={Styles.container2}>
        <TextInput onChangeText={(ori) => this.setState({ori})} style={Styles.instructions} placeholder='Le word to analyze'/>
        <Button color="#1F45FC" onPress={this.analyzer} title='Analyze!'/>
          <Text>Word:- {this.state.ori}</Text>
          <Text>Vowels:- {this.state.vowel}</Text>
          <Text>Consonants:- {this.state.conso}</Text>
          <Text>Characters:- {this.state.panjang2}</Text>
        </View>
        
        <View style={Styles.container}>
        <Text>Thank you for using this app! ^_^</Text>
        <Text></Text>
        </View>
      </View>
    );
  }
}
