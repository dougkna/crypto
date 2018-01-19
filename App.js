import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { fetchPrice } from './src/config/api';
import { Auth, Main } from './src/config/router';
import { server } from './src/config/data';
let priceRefresh;

export default class App extends Component {
  static defaultProps = {
    fetchPrice
  };

  state = {
    loading: false,
    currencies: [],
  };

  componentWillMount() {
    //Check if serialized user data exists in session
    return fetch(`${server}/getUser`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((result) => {
      if (result.status === 200) this.approveLogin(result._bodyText); 
      else this.setState({ loggedIn: false }); 
    })
    .catch(err => {
      console.log("Error getting user.", err);
      this.setState({ loggedIn: false, loading: false }); 
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
  }

  componentWillUnmount() {
    clearInterval(priceRefresh);
  }

  approveLogin = (user) => {
    let userObj = JSON.parse(user);
    this.setState({ 
      user: {
        id: userObj.id, 
        username: userObj.username,
        email: userObj.email,
        cryptos: userObj.cryptos
      },
      loggedIn: true,
      loading: false,
    });
    this.getPrice(userObj.cryptos);
    priceRefresh = setInterval(() => this.getPrice(userObj.cryptos), 10000);
  };

  getPrice = async (cryptos) => {
    const data = await this.props.fetchPrice(cryptos);
    if (Array.isArray(data)) {
      this.setState({ currencies: data });
    } else {
      console.log("Error in fetching prices.")
      this.setState({ currencies: [] });
    }
  };

  logout = () => {
    return fetch(`${server}/logout`)
      .then((result) => {
        this.setState({ loggedIn: false });
        clearInterval(priceRefresh);
      })
      .catch(err => {
        console.log("Error logging out.", err);
      });
  };

  render() {
    const { loading, loggedIn } = this.state;
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="small"/>
        </View>
      );
    } else {
      if (loggedIn) {
        return <Main 
          screenProps={{
            ...this.state,
            logout: this.logout
          }}
        />
      } else {
        return <Auth 
          screenProps={{approveLogin: this.approveLogin}}
        />
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
