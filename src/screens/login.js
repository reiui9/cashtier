import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Card, CardSection, Input, PasswordTextInput, Button, Spinner } from "../components";
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LoginForm extends Component<Props> {
  state = { 
    email: "", 
    password: "", 
    error: "", 
    loading: false 
  };

  onButtonPress() {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) {
      this.setState({
        error: "Please enter valid credential",
        loading: false
      })
    }
    else {
      this.setState({ error: "", loading: true });
    }
    this.props.navigation.navigate('Main')
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed",
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
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    // return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;

    return <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>;
    
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

          <CardSection>{this.renderButton()}</CardSection>
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

// export default LoginForm;
