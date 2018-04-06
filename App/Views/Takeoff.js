import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

var backgroundImage = require('./Assets/Takeoff.png')

class Takeoff extends Component {
  render() {
    return (
      <View style={styles.imageView}>
        
        <View style={{position: 'absolute', left:0, top:0, height: '100%', width: '100%'}}>
          <Image source={backgroundImage} style={{flex:1, height: null, width: null}}/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  flex: 1,
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 150,
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default Takeoff;
