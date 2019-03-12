/**
 * CurrentWeight Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class CurrentWeight extends Component<Props> {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.currentText}>Actual</Text>
        <Text style={styles.weigthText}>{this.props.firstrecord}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 326,
    backgroundColor: '#f76d1d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10
  },
  currentText: {
    fontSize: 18,
    color: 'white'
  },
  weigthText: {
    fontSize: 28,
    color: 'white'
  }


});
