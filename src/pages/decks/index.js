import React, { Component } from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from 'components/DeckCard'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FlashcardsActions } from 'store/ducks/flashcard'

class Decks extends Component {

  componentDidMount() {
    this.getDecks()
  }

  getDecks = async () => {
    const { loadDecks } = this.props
    await loadDecks()
  }

  _keyExtractor = index => index.toString()

  _rendeItem = ({ item, index }) => {
    console.tron.log(item, index)
    return (
      <DeckCard data={item} onPress={() => this.deckScreen(item)} />
    )
  }

  deckScreen = async (deck) => {
    const { navigation, setSelectedDeck } = this.props
    console.tron.log("CLICK", deck)
    await setSelectedDeck(deck)

    const { title } = deck

    navigation.navigate('DeckDetail', { title })
  }

  onNavigate = (screen) => {
    const { navigation } = this.props
    navigation.navigate(screen)
  }

  render() {
    const { decks } = this.props

    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <VerticalSlideAnimation>
          { decks.length > 0 
            ? (
              <FlatList
                ref="listRef"
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={this._keyExtractor}
                data={decks}
                renderItem={this._rendeItem}
                numColumns={1}
                accessibilityLabel="Card List"
                refreshing
              />
            )
            : <Text> You new add decks </Text>
          }
          <View style={styles.button}>
            <Button text="New Deck" onPress={() => this.onNavigate("NewDeck")} />
          </View>
        </VerticalSlideAnimation>
      </ScrollView>
    )
  }
}

Decks.propTypes = {
  loadDecks: PropTypes.function,
  setSelectedDeck: PropTypes.function,
  card: PropTypes.shape({
    cards: PropTypes.array,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.function,
  }),
}

const mapStateToProps = state => ({
  decks: state.flashcard.decks,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
