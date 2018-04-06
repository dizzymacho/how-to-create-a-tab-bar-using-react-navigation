import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

var backgroundImage = require('./Assets/Quavo.png')

class Quavo extends Component {
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

  imageView: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default Quavo;
