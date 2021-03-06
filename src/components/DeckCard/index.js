import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'theme'
import PropTypes from 'prop-types'
import styles from './styles'

class DeckCard extends Component {

  callback = (callback) => {
    if (typeof callback === 'function') {
      callback()
    }
  }

  render() {
    const { data, onPress } = this.props
    const { title, questions } = data
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container}
        onPress={() => { this.callback(onPress) }}
      >
        <View style={styles.content}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
          </View>
          <View style={styles.cardNumbersContainer}>
            <Text style={styles.cardNumbers}>{questions == null ? 0 : questions.length}</Text>
            <Text style={styles.card}>cards</Text>
          </View>
          <View style={styles.cardIcon}>
            <Icon name={'chevron-right'} size={15} color={colors.black} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

DeckCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }).isRequired,
  onPress: PropTypes.function,
}

export default DeckCard
