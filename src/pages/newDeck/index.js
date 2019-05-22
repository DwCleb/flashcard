import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'

class NewDeck extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NewDeck</Text>
      </View>)
  }
}

NewDeck.propTypes = {
};

export default NewDeck
