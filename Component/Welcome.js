import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {TextInput} from 'react-native-paper';

const Welcome = () => {
  const [email, useEmail] = useState('');
  const [password, usePassword] = useState('');
  const [welcomeSwitch, useWelcomeSwitch] = useState({
    signInBorder: 3,
    signUpBackground: '#ffffff',
    signInBackground: '#DCDFDC',
    signUpBorder: 1,
    showInput: true,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            useWelcomeSwitch({
              signInBorder: 3,
              signUpBackground: '#ffffff',
              signInBackground: '#DCDFDC',
              signUpBorder: 1,
              showInput: true,
            });
          }}
          style={{
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 33,
            paddingVertical: 8,
            backgroundColor: welcomeSwitch.signInBackground,
            borderRightWidth: welcomeSwitch.signInBorder,
            borderBottomWidth: welcomeSwitch.signInBorder,
            borderColor: '#21C748',
            marginRight: 40,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#21C748'}}>
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            useWelcomeSwitch({
              signInBorder: 1,
              signUpBackground: '#DCDFDC',
              signInBackground: '#ffffff',
              signUpBorder: 3,
              showInput: false,
            });
          }}
          style={{
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 33,
            paddingVertical: 8,
            backgroundColor: welcomeSwitch.signUpBackground,
            borderLeftWidth: welcomeSwitch.signUpBorder,
            borderBottomWidth: welcomeSwitch.signUpBorder,
            borderColor: '#21C748',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#21C748'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      {welcomeSwitch.showInput && (
        <View>
          <View
            style={{
              width: Dimensions.get('window').width,
              paddingHorizontal: 47,
              marginTop: 40,
              //   alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={value => {
                useEmail({
                  email: value,
                });
              }}
              style={{height: 45}}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={value => {
                usePassword({
                  password: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 189,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#21C748',
                marginTop: 40,
              }}>
              <Text style={{color: '#21C748'}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!welcomeSwitch.showInput && (
        <View>
          <View
            style={{
              width: Dimensions.get('window').width,
              paddingHorizontal: 47,
              marginTop: 40,
              //   alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              label="First Name"
              value={password}
              onChangeText={value => {
                usePassword({
                  password: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
            <TextInput
              label="Last Name"
              value={password}
              onChangeText={value => {
                usePassword({
                  password: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={value => {
                useEmail({
                  email: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
            <TextInput
              label="Password"
              value={password}
              onChangeText={value => {
                usePassword({
                  password: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
            <TextInput
              label="Confirm Password"
              value={password}
              onChangeText={value => {
                usePassword({
                  password: value,
                });
              }}
              style={{height: 45, marginTop: 20}}
            />
          </View>
          <View
            style={{
              width: Dimensions.get('window').width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 189,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#21C748',
                marginTop: 40,
              }}>
              <Text style={{color: '#21C748'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
export default Welcome;
