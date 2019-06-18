import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FlashcardsActions } from 'store/ducks/flashcard'

class NewDeck extends Component {

  state = {
    deckTitle: '',
  }

  addNewDeck = async () => {
    const { deckTitle } = this.state
    const { addDeck } = this.props

    if (deckTitle.length < 1) {
      Alert.alert(
        'Ops, this is empty!',
        'You need a title to create one deck.',
        [
          { text: 'Ok' },
        ],
        { cancelable: false },
      )
      return false
    }

    if (this.deckTitleExist()) {
      Alert.alert(
        'Ow Ghost!',
        `You already created ${deckTitle} deck.\n Please, enter a new title.`,
        [
          { text: 'Ok' },
        ],
        { cancelable: false },
      )
      return false
    }

    await addDeck(deckTitle)
    this.getDeckAdded()

    Alert.alert(
      'Deck added!',
      `Your ${deckTitle} deck was created.`,
      [
        { text: 'Ok', onPress: () => this.redirect(deckTitle) },
      ],
      { cancelable: false },
    )
  }

  deckTitleExist = () => {
    const { deckTitle } = this.state
    const { decks } = this.props

    const exists = decks.filter(card => card.title == deckTitle)

    return (exists.length < 1) ? false : true
  }

  getDeckAdded = async () => {
    const { deckTitle } = this.state
    const { decks, setSelectedDeck } = this.props

    const newDeck = decks.filter(card => card.title == deckTitle)

    await setSelectedDeck(newDeck[0])
  }

  redirect = (title) => {
    this.clearFields()
    const { navigation } = this.props
    navigation.navigate('DeckDetail', { title })
  }

  clearFields = () => {
    this.setState({ deckTitle: '' })
  }

  toogleValue = (title) => {
    this.setState({
      deckTitle: title
    })
  }

  render() {
    const { deckTitle } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Deck Title"
            onChangeText={(title) => this.toogleValue(title)}
            value={deckTitle}
            style={styles.input}
          />
        </View>
        <View style={styles.button}>
          <Button text="Submit" onPress={this.addNewDeck} />
        </View>
      </View>
    )
  }
}

NewDeck.propTypes = {
  addDeck: PropTypes.function,
  decks: PropTypes.array,
}

const mapStateToProps = state => ({
  decks: state.flashcard.decks,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck)
