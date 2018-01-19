import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class CryptoDetail extends Component {
  
  render() {
    //props from App: this.props.screenProps
    //props from HomeNavigator (CryptoScreen): this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.deleteButton}>
          <Button
            raised
            icon={{name: 'delete'}}
            //onPress={}
            title='Delete'
            backgroundColor='#d35400'
            buttonStyle={{height: 30}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems:'center',
  },
  profileColumn: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  avatar: {
    margin: 5,
  },
  username: {
    margin: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  deleteButton: {
    width: '50%',
  },
});