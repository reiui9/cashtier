import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Card, CardSection, Input, PasswordTextInput, Button, Spinner } from "../components";
import Auth from "../util/auth";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase'

export default class LoginForm extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: ''};
  }

  state = { 
    email: "", 
    password: "", 
    error: "", 
    loading: false,
    loggedIn: null
  };


  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCtRqoLcxKx6WIxhQ-edfaO1WqqjLwXkjw",
      authDomain: "adtree-bc7dc.firebaseapp.com",
      databaseURL: "https://adtree-bc7dc.firebaseio.com/",
      storageBucket: "adtree-bc7dc.appspot.com",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  onLoginButtonPress() {
    console.log("onLoginButtonPress() -> 1")

    this.setState({ error: '', loading: true })
    const { email, password } = this.state;

    console.log("onLoginButtonPress() -> 2")

    Auth.login(email, password)
    .then((result) => {
      result = result.toString()
      if ( result == "true" ){
        this.onLoginSuccess.bind(this)()
      }
      else
        this.onLoginFail.bind(this)(result)
    })
  }

  onLoginFail(errorMessage) {
    this.setState({
      error: errorMessage,
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
    this.props.navigation.navigate('Main')
  }

  pressSignup() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
    this.props.navigation.navigate('SignupForm')
  }

  renderLoginButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onLoginButtonPress.bind(this)}>Log in</Button>;
  }

  renderSignupButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.pressSignup.bind(this)}>Sign up</Button>;
  }

  renderError() {
    if (this.state.error.length > 0) {
      return <Text style={styles.errorStyle}>{this.state.error}</Text>
    }
  }


  render() {
    return (
      <View>
        <Header title="Login" />

        <Card>
          <CardSection>
            <Input
              placeholder="Enter Email"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <PasswordTextInput
              placeholder="Enter Password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          {this.state.error.length > 0 && <Text style={styles.errorStyle}>{this.state.error}</Text>}

          <CardSection>{this.renderLoginButton()}</CardSection>

          <CardSection>{this.renderSignupButton()}</CardSection>

        </Card>
      </View>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 18,
    alignSelf: "center",
    color: "red",
    padding: 5
  }
};

