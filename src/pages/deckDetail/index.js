import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'

class DeckDetail extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('card').title,
  });

  componentWillMount() {
    const { navigation } = this.props;
    this.card = navigation.getParam('card')
  }

  render() {
    return (<View style={styles.container}><Text>DeckDetail
    </Text></View>)
  }
}

DeckDetail.propTypes = {
}

export default DeckDetail
