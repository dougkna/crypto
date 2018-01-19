import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { server } from '../../config/data';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ warning: false });
    return fetch(`${server}/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if (res.status === 201) {
        this.props.approveLogin(res._bodyText);
      } else if (res.status === 400 || res.status === 401) {
        this.setState({ warning: true });
      }
      return;
    })
    .catch(err => {
      console.log("Error loggin in.", err);
    });
  };
  
  render() {
    let Warning = null;
    if (this.state.warning) {
      Warning = <Text style={styles.warning}>
        Incorrect username or password
      </Text>
    } else {
      Warning = <Text style={{marginBottom:8}}></Text>
    }
    
    return (
      <View style={styles.container}>
        {Warning}
        <TextInput 
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='#34495e'
          returnKeyType='next'
          autoCapitalize='none'
          autoCorrect={false}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput 
          style={styles.input}
          placeholder='Password'
          secureTextEntry
          placeholderTextColor='#34495e'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={(e) => this.handleSubmit(e)}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text 
            style={styles.buttonText}
            onPress={(e) => this.handleSubmit(e)}
          >LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 38,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    color: '#34495e',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    marginBottom: -5,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '800'
  },
  warning: {
    textAlign: 'center',
    color: '#e74c3c',
    marginBottom: 5,
  }
});