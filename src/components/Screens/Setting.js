import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

const Setting = ({ screenProps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileColumn}>
        <Avatar
          medium
          rounded
          icon={{name: 'person', type: 'MaterialIcons'}}
          activeOpacity={0.8}
          overlayContainerStyle={styles.avatar}
        />
        <Text style={styles.username}>{screenProps.user.username}</Text>
      </View>
      <View style={styles.logoutButton}>
        <Button
          raised
          icon={{name: 'log-out', type: 'feather'}}
          onPress={screenProps.logout}
          title='Logout'
          backgroundColor='#d35400'
          buttonStyle={{height: 30}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 50,
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
  logoutButton: {
    width: '50%',
  },
});

export default Setting;