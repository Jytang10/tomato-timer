import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          <Text>Buttons here</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  lower: {
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  },
  time: {}
}); 

export default Timer;
