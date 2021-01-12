import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground } from 'react-native';

export default class HomeScreen extends (Component) {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Admin',
      password: '12345',
    };
  }


  render() {
    return (
      // Background //
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }} >
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
            }}
            style={{ width: 40, height: 40, marginTop: 70 }}
          />

          <Text style={{ color: '#0250a3', textAlign: 'center', fontSize: 30, marginTop: 10, }}>Wallpaper Login</Text>
          <View style={styles.userr}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 10, color: '#0250a3' }}>User : </Text>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
          </View>

          <View style={styles.passwordd}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginRight: 10, color: '#0250a3' }}>Pass : </Text>
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <Button title='Login'
            onPress={() => {
              if (this.state.username == 'Admin' && this.state.password == '12345') {
                alert('Login Success')
                this.props.navigation.navigate('Wallpaper', { name: 'HungNT' })
              } else {
                alert('Login Failed')
              }

            }
            } />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  userr: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    width: '75%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#009fed',
  },
});
