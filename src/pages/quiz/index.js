import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import BoxMessage from 'components/BoxMessage'
import Button from 'components/Button'
import CardFlip from 'react-native-card-flip'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as CardActions } from 'store/ducks/card'

class Quiz extends Component {
  static navigationOptions = () => ({
    title: "Quiz",
  })

  state = {
    now: 1,
    correct: 0,
    incorrect: 0,
    answerIsVisible: false,
  }

  showAnswer = () => {
    this.setState({ answerIsVisible: true })
    this.card.flip()
  }

  answer = action => {
    const { now, correct, incorrect } = this.state

    this.setState({ answerIsVisible: false })

    let correctAction = parseInt(correct)
    let incorrectAction = parseInt(incorrect)

    if (action === true) correctAction++
    else incorrectAction++

    this.setState({
      now: now + 1,
      correct: correctAction,
      incorrect: incorrectAction,
    })

    this.card.flip()
  }

  render() {
    const {
      now,
      correct,
      incorrect,
      answerIsVisible,
    } = this.state
    const { card } = this.props
    const { cardSelected } = card
    const { questions } = cardSelected

    return (
      <VerticalSlideAnimation>
        {now > questions.length
          ? (
            <VerticalSlideAnimation>
              <BoxMessage isVisible correct={correct} incorrect={incorrect} />
            </VerticalSlideAnimation>
          )
          : (
            <VerticalSlideAnimation>
              <View style={styles.question}>
                <Text  style={styles.questionText}>{`${now}/${questions.length}`}</Text>
              </View>
              <View style={styles.container}>
                <View>
                  <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                    <View style={styles.content}>
                      <View style={styles.contentInfo}>
                        <Text>{questions[now - 1].question}</Text>
                      </View>
                      <View style={styles.footer}>
                        <Button
                          text="Answer"
                          theme="answer"
                          type="borderedBottomFull"
                          onPress={() => this.showAnswer()}
                        />
                      </View>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.contentInfo}>
                        <Text>{
                          answerIsVisible
                            ? questions[now - 1].answer
                            : (null)
                        }</Text>
                      </View>
                      <View style={styles.footer}>
                        <Button
                          text="Incorrect"
                          theme="danger"
                          type="borderedBottomLeft"
                          onPress={() => this.answer(false)}
                        />
                        <Button
                          text="Correct"
                          theme="success"
                          type="borderedBottomRight"
                          onPress={() => this.answer(true)}
                        />
                      </View>
                    </View>
                  </CardFlip>
                </View>
              </View>
            </VerticalSlideAnimation>
          )
        }
      </VerticalSlideAnimation>
    )
  }
}

Quiz.propTypes = {
  card: PropTypes.shape({
    cardSelected: PropTypes.shape({
      questions: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

const mapStateToProps = state => ({
  card: state.card,
})

const mapDispatchToProps = dispatch => bindActionCreators(CardActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
