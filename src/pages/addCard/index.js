import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'

class AddCard extends Component {
  render() {
    return (<View style={styles.container}><Text>AddCard</Text></View>)
  }
}

AddCard.propTypes = {
};

export default AddCard
