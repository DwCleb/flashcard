import React, { Component } from 'react'
import {
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from 'components/DeckCard'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as CardActions } from 'store/ducks/card'

class Decks extends Component {

  componentDidMount() {
    this.getCards()
  }

  getCards = async () => {
    const { loadCards } = this.props
    await loadCards()
  }

  _keyExtractor = index => index.toString()

  _rendeItem = ({ item, index }) => {
    console.tron.log(item, index)
    return (
      <DeckCard data={item} onPress={() => this.cardScreen(item)} />
    )
  }

  cardScreen = async (card) => {
    const { navigation, setSelectedCard } = this.props

    await setSelectedCard(card)

    const { title } = card

    navigation.navigate('DeckDetail', { title })
  }

  onNavigate = (screen) => {
    const { navigation } = this.props
    navigation.navigate(screen)
  }

  render() {
    const { card } = this.props
    const { cards } = card

    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <VerticalSlideAnimation>
          <FlatList
            ref="listRef"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={this._keyExtractor}
            data={cards}
            renderItem={this._rendeItem}
            numColumns={1}
            accessibilityLabel="Card List"
            refreshing
          />
          <View style={styles.button}>
            <Button text="New Deck" onPress={() => this.onNavigate("NewDeck")} />
          </View>
        </VerticalSlideAnimation>
      </ScrollView>
    )
  }
}

Decks.propTypes = {
  loadCards: PropTypes.function,
  setSelectedCard: PropTypes.function,
  card: PropTypes.shape({
    cards: PropTypes.array,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.function,
  }),
}

const mapStateToProps = state => ({
  card: state.card,
})

const mapDispatchToProps = dispatch => bindActionCreators(CardActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
