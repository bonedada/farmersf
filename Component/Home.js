import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import cloud from './assets/cloud.png';
import farm from './assets/farm.png';
import cropCheck from './assets/cropCheck.png';
import diseaseCheck from './assets/diseaseCheck.png';
import farmCheck from './assets/field.png';
import dealer from './assets/dealer.png';
import {withNavigation} from 'react-navigation';
const Home = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: '#21C748',
          paddingHorizontal: 21,
          paddingVertical: 6,
          backgroundColor: '#fff',
          elevation: 6,
          borderRadius: 10,
          marginTop: 40,
          fontSize: 20,
          borderWidth: 1,
          borderColor: '#21C748',
        }}>
        Hello {'Dada'}
      </Text>
      <View
        style={{
          width: Dimensions.get('window').width - 62,
          height: 225,
          backgroundColor: '#fff',
          elevation: 6,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#21C748',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#21C748',
          }}>
          <Text style={{color: '#21C748'}}>{'Sunny'}</Text>
          <Image
            source={cloud}
            style={{height: 40, width: 40, marginLeft: 19, marginRight: 19}}
          />
          <Text style={{color: '#21C748'}}>{'30 C'}</Text>
        </View>
        <Image
          style={{
            width: Dimensions.get('window').width - 180,
            height: 225 - 100,
          }}
          source={farm}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#21C748'}}>
            location:
            {
              <Text style={{color: '#21C748', fontWeight: 'bold'}}>
                Bolgatanga
              </Text>
            }
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#21C748'}}>
            Crop: {<Text style={{fontWeight: 'bold'}}> Maize</Text>}
          </Text>
          <Text style={{marginLeft: 10, color: '#21C748'}}>
            Suitability: {<Text style={{fontWeight: 'bold'}}> {85}%</Text>}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#21C748',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 20,
            lineHeight: 27,
          }}>
          Services available
        </Text>
        <View
          style={{
            paddingHorizontal: 43,
            paddingVertical: 20,
            width: Dimensions.get('window').width,
            flexWrap: 'wrap',
            flexDirection: 'row',

            // flex: 0.5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              elevation: 6,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Image source={farmCheck} style={{height: 75, width: 75}} />
            <Text style={{color: '#21C748', marginTop: 10, fontSize: 15}}>
              Farm check
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Crop');
            }}
            style={{
              width: 120,
              height: 120,
              elevation: 6,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Image source={cropCheck} style={{height: 75, width: 75}} />
            <Text
              style={{
                color: '#21C748',
                marginTop: 10,
                fontSize: 15,
              }}>
              Crop check
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 43,
            paddingVertical: 20,
            width: Dimensions.get('window').width,
            flexWrap: 'wrap',
            flexDirection: 'row',

            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              elevation: 6,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Image source={diseaseCheck} style={{height: 75, width: 75}} />
            <Text
              style={{
                color: '#21C748',
                marginTop: 10,
                fontSize: 15,
              }}>
              Disease check
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 120,
              elevation: 6,
              backgroundColor: '#fff',
              padding: 5,
              borderRadius: 5,
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}>
            <Image source={dealer} style={{height: 75, width: 75}} />
            <Text
              style={{
                color: '#21C748',
                marginTop: 10,
                fontSize: 15,
              }}>
              Dealers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default withNavigation(Home);
