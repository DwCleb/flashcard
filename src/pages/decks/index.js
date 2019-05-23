import React, { Component } from 'react'
import {
  View,
  Text,
  AsyncStorage,
  FlatList,
} from 'react-native'
import PropTypes from 'prop-types';
import DeckCard from 'components/DeckCard'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'

const MOCK = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]
class Decks extends Component {

  _keyExtractor = index => index.toString()

  _rendeItem = ({ item, index }) => {
    console.tron.log(item, index)
    return (
      <DeckCard data={item} onPress={() => this.cardScreen(item)} />
    )
  }

  cardScreen = (card) => {
    const { navigation } = this.props;
    navigation.navigate('DeckDetail', { card })
  }

  onNavigate = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen)
  }

  render() {
    return (
      <View style={styles.container}>
        <VerticalSlideAnimation>
          <FlatList
            ref="listRef"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={this._keyExtractor}
            data={MOCK}
            renderItem={this._rendeItem}
            numColumns={1}
            accessibilityLabel="Card List"
          />
          <View style={styles.button}>
            <Button text="New Deck" onPress={() => this.onNavigate("NewDeck")} />
          </View>
        </VerticalSlideAnimation>
      </View>
    )
  }
}

Decks.propTypes = {
};

export default Decks
