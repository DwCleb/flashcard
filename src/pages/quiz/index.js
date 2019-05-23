import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types';
import styles from './styles'

class Quiz extends Component {
  static navigationOptions = () => ({
    title: "Quiz",
  });
  render() {
    return (<View style={styles.container}><Text>Quiz</Text></View>)
  }
}

Quiz.propTypes = {
};

export default Quiz
