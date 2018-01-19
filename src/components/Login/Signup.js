import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import SignupForm from './SignupForm';

const Signup = ({ screenProps }) => {
  return (
    <ScrollView 
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.signupContainer}>
        <SignupForm {...screenProps}/>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  signupContainer: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

export default Signup;