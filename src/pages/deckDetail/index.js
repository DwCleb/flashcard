import React, { Component } from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FlashcardsActions } from 'store/ducks/flashcard'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  })

  onNavigate = (screen, title = null) => {
    const { navigation } = this.props
    navigation.navigate(screen, { title })
  }

  render() {
    const { flashcard } = this.props
    const { deckSelected } = flashcard
    const { title, questions } = deckSelected

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <VerticalSlideAnimation>
            <View style={styles.content}>
              <View style={styles.contentInfo}>
                <View style={styles.cardNumbersContainer}>
                  <Text style={styles.title}>
                    {title}
                  </Text>
                  <Text style={styles.cardNumbers}>
                    {questions == null ? 0 : questions.length}
                  </Text>
                  <Text style={styles.card}>
                    cards
                  </Text>
                </View>
              </View>
              <View style={styles.footer}>
                <Button
                  text="Add Card"
                  theme="void"
                  type="borderedBottomLeft"
                  onPress={() => this.onNavigate("AddCard", { title })}
                />
                <Button
                  text="Start Quiz"
                  type="borderedBottomRight"
                  onPress={() => this.onNavigate("Quiz", { title })}
                />
              </View>
            </View>
          </VerticalSlideAnimation>
        </View>
      </View>
    )
  }
}

DeckDetail.propTypes = {
  card: PropTypes.shape({
    deckSelected: PropTypes.shape({
      title: PropTypes.string,
      questions: PropTypes.array,
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.function,
    navigate: PropTypes.function,
  }).isRequired,
}

const mapStateToProps = state => ({
  flashcard: state.flashcard,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail)
