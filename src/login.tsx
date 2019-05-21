import React, {Component} from 'react';
import {Button, Text, View, TextInput, AppRegistry} from 'react-native';
import {SignOutUser,UserInDB, MakeNewUser} from './loginHandler';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: 'Your Email' ,password: 'Your Password', loginStatus: "good"};
  }

  loginListener = () =>{
    let status = UserInDB(this.state.email, this.state.password);
    // if (!status){
    //   console.log("status error:" +status)
    // }
  }

  signUpListener = () =>{
    let status = MakeNewUser(this.state.email, this.state.password);
    // if (!status){
    //   console.log("status error:" +status)
    // }
  }

  signOutListener = () =>{
    let status = SignOutUser();
    // if (!status){
    //   console.log("status error:" +status)
    // }
  }


  render() {
    return (
      <View 
        style={{borderTopColor:"aliceBlue", padding: 100}}>
        <Text style={{}}>
          Email{"\n"}
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text>
        {"\n"}Password
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          onPress={this.loginListener}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
          <View style={{padding:20}}></View>
        <Button
          onPress={this.signUpListener}
          title="SignUp"
          color="#400000"
          accessibilityLabel="Learn more about this purple button"
          />
          <View style={{padding:20}}></View>
        <Button
          onPress={this.signOutListener}
          title="SignOut"
          color="#400000"
          accessibilityLabel="Learn more about this purple button"
          />
          
      </View>
    );
  }
}
