import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Card, CardSection, Input, PasswordTextInput, Button, Spinner } from "../components";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Auth from "../util/auth";

export default class SignupForm extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', password2: '', error: ''};
  }

  state = { 
    email: "", 
    password: "", 
    password2: "", 
    error: "", 
    loading: false,
    loggedIn: null
  };

  onSignupButtonPress() {
    this.setState({ error: '', loading: true })
    const { email, password, password2 } = this.state;

    Auth.signup(email, password, password2)
    .then((result) => {
      result = result.toString()
      if ( result == "true" ){
        this.onSignupSuccess.bind(this)()
      }
      else
        this.onSignupFail.bind(this)(result)
    })

  }

  onSignupFail(errorMessage) {
    this.setState({
      error: errorMessage,
      loading: false
    });
  }

  onSignupSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
    this.props.navigation.navigate('LoginForm')
  }

  renderSignupButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onSignupButtonPress.bind(this)}>Sign up</Button>;
  }

  renderError() {
    if (this.state.error.length > 0) {
      return <Text style={styles.errorStyle}>{this.state.error}</Text>
    }
  }


  render() {
    return (
      <View>
        <Header title="Signup" />

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

        <CardSection>
            <PasswordTextInput
              placeholder="Enter Password Again"
              label="Password"
              value={this.state.password2}
              onChangeText={password2 => this.setState({ password2 })}
            />
          </CardSection>

          {this.state.error.length > 0 && <Text style={styles.errorStyle}>{this.state.error}</Text>}

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

