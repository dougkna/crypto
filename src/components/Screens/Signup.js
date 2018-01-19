import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import SignupForm from '../Login/SignupForm';

export const SignupScreen = ({ navigation, screenProps }) => {
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
)};

const navigationOptions = ({ navigation }) => ({
  headerTitle: 'Signup',
  headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})

const SignupNavigator = StackNavigator({
  Signup: {
    screen: SignupScreen,
    navigationOptions
  },
});

export default SignupNavigator;

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