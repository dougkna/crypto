import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
const jQuery = require('jquery');
import { server } from '../../config/data';

export default class SignupForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    cryptos: ['BTC', 'ETH', 'XRP', 'BCH', 'LTC'],
  };

  validateInputBeforeSubmit = (e) => {
    if (/[a-zA-Z0-9]+@\S+\.\S+/.test(this.state.email)
      && this.state.password.length >= 4
      && /^[a-zA-Z0-9]+$/.test(this.state.username) && this.state.username.length >= 4
    ) {
      this.setState({ warning: false });
      this.handleSubmit(e);
    } else {
      this.setState({ warning: true });
      return;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    return fetch(`${server}/signup`, {
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
      } else if (res.status === 401) {
        alert(res._bodyText);
      }
      return;
    })
    .catch(err => {
      console.log("Error signing up.", err);
    });
  };
  
  render() {
    let Warning = null;
    if (this.state.warning) {
      Warning = <Text style={styles.warning}>
        Fill in all information correctly.{"\n"}Username: 4 characters or more{"\n"}Password: 4 characters or more
      </Text>
    } else {
      Warning = <Text style={{marginTop:15}}></Text>
    }

    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          placeholderTextColor='#34495e'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          onSubmitEditing={() => this.usernameInput.focus()}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput 
          style={styles.input}
          placeholder='Username (at least 4 letters/numbers)'
          placeholderTextColor='#34495e'
          returnKeyType='next'
          autoCapitalize='none'
          autoCorrect={false}
          ref={(input) => this.usernameInput = input}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <TextInput 
          style={styles.input}
          placeholder='Password (at least 4 characters)'
          secureTextEntry
          placeholderTextColor='#34495e'
          returnKeyType='go'
          autoCapitalize='none'
          autoCorrect={false}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={(e) => this.validateInputBeforeSubmit(e)}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text 
            style={styles.signupButton} 
            onPress={(e) => this.validateInputBeforeSubmit(e)}
          >SIGN UP</Text>
        </TouchableOpacity>
        {Warning}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
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
  signupButton: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '800',
  },
  warning: {
    color: '#e74c3c',
    marginTop: 15,
  }
});