import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, 
  Image, ActivityIndicator } from 'react-native';
import { List, ListItem, Button, Avatar, Icon } from 'react-native-elements';
import { symbols, getIcon } from '../../config/data';

export default class Crypto extends Component {
  state = {
    loading: true,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.currencies) {
      this.setState({ loading: false });
    }
  }

  onLearnMore = (cypto) => {
    this.props.navigation.navigate('CryptoDetail', { ...cypto });
  };
  
  render() {
    const { currencies } = this.props.screenProps;
    let component = null;
    if (currencies.length) {
      component = <ScrollView style={styles.listContainer}>
        <List>
          {currencies.map((crypto, i) => {
            return (
              <ListItem
                key={i}
                leftIcon={
                  <Image
                    source={getIcon(crypto.symbol)}
                    style={styles.icon}
                  />
                }
                title={crypto.price}
                subtitle={crypto.symbol}
                style={styles.ListItem}
                onPress={() => this.onLearnMore(crypto)}
              />
            )}
          )}
        </List>
      </ScrollView>
    } else {
      component = <View style={styles.empty}>
        <Text style={{fontSize: 20}}>You are not tracking any currencies.</Text>
      </View>
    }

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.empty}>
            <ActivityIndicator size="small"/>
          </View>
        </View>
      );
    } else {
      return <View style={styles.container}>{component}</View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: -20,
  },
  empty: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  ListItem: {
    alignItems:'center',
    justifyContent:'center',
  },
  icon: {
    margin: 5,
    marginRight: 10
  },
  subtitle: {
    flexDirection: 'row',
    color: '#7f8c8d'
  },
});