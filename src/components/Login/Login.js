import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,
  KeyboardAvoidingView, TouchableOpacity, 
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  signup = () => {
    this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      <ScrollView 
        scrollEnabled={false}
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{flex: 1}}
        >
          <View style={styles.logoContainer}>
            <Image 
              style={styles.logo}
              source={require('../../public/images/logo-cryptocurrency.png')}
            />
            <Text style={styles.title}>VOLARM</Text>
          </View>
          <View>
            <LoginForm {...this.props.screenProps}/>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>{`Don't have an account?`}</Text>
            <TouchableOpacity
              onPress={this.signup}
            >
              <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  signupContainer: {
    justifyContent: 'center',
    marginBottom: 30,
    flexDirection: 'row'
  },
  signupText: {
    color: '#95a5a6',
  },
  signupButton: {
    color: '#FFF',
    fontWeight: '700',
  },
  title: {
    fontWeight: '900',
    fontSize: 23,
    color: '#95a5a6',
    marginTop: -10,
  },
  logo: {
    width: 150,
    height: 150,
  },
});