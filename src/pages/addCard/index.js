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


class AddCard extends Component {

  static navigationOptions = () => ({
    title: "Add Card",
  })

  componentWillMount() {
    const { navigation } = this.props
    const deckTitle = navigation.getParam('title')
    this.setState({ deckTitle })
  }

  state = {
    question: '',
    answer: '',
    deckTitle: '',
  }

  addNewCard = async () => {
    const { question, answer } = this.state
    const { addCard } = this.props

    if (question.length < 1 || answer.length < 1) {
      Alert.alert(
        'Ops, this is empty!',
        'You need put something in these fields.',
        [
          { text: 'Ok' },
        ],
        { cancelable: false },
      )

      return false
    }

    const card = await this.mountDeck()

    await addCard(card)

    Alert.alert(
      'Card added!',
      `Your card was created.`,
      [
        { text: 'Ok', onPress: () => this.redirect() },
      ],
      { cancelable: false, onPress: () => this.redirect() },
    )

  }

  mountDeck = () => {
    const { flashcard } = this.props
    const { deckTitle, question, answer } = this.state

    const newDeck = flashcard.decks.filter(card => {
      let auxCard = card

      if (auxCard.title == deckTitle.title) {
        const newQuestion = {
          question,
          answer,
        }
        auxCard.questions.push(newQuestion)
      }
      return auxCard
    })

    return newDeck
  }

  redirect = () => {
    this.clearFields
    const { navigation } = this.props
    navigation.goBack()
  }

  clearFields = () => {
    this.setState({
      question: '',
      answer: '',
    })
  }

  toogleQuestion = (question) => this.setState({ question })

  toogleAnswer = (answer) => this.setState({ answer })

  render() {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Question</Text>
          </View>
          <TextInput
            placeholder="Question"
            onChangeText={(questionText) => this.toogleQuestion(questionText)}
            value={question}
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Answer</Text>
          </View>
          <TextInput
            placeholder="Answer"
            onChangeText={(answerText) => this.toogleAnswer(answerText)}
            value={answer}
            style={styles.input}
          />
        </View>
        <View style={styles.button}>
          <Button text="Submit" style={{ width: '50%' }} onPress={this.addNewCard} />
        </View>
      </View>
    )
  }
}

AddCard.propTypes = {

}

const mapStateToProps = state => ({
  flashcard: state.flashcard,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCard)
