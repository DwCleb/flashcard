import React, { PureComponent } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import BoxMessage from 'components/BoxMessage'
import Button from 'components/Button'
import CardFlip from 'react-native-card-flip'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FlashcardsActions } from 'store/ducks/flashcard'
import NotifService from 'NotifService'
import appConfig from '../../../app.json'

class Quiz extends PureComponent {
  static navigationOptions = () => ({
    title: "Quiz",
  })

  constructor(props) {
    super(props);
    this.state = {
      senderId: appConfig.senderID,
      now: 1,
      correct: 0,
      incorrect: 0,
      answerIsVisible: false,
      remember: true,
    };

    this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));
  }

  onRegister(token) {
    Alert.alert("Registered !", JSON.stringify(token));
    console.log(token);
    this.setState({ registerToken: token.token, gcmRegistered: true });
  }

  onNotif(notif) {
    console.log(notif);
    Alert.alert(notif.title, notif.message);
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

  restart = () => {
    this.setState({ now: 1 })
  }

  backToDeck = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  updateRememberLocalNotification = () => {
    this.setState({ remember: false })
    // first cancell all exists notifications
    this.notif.cancelAll()

    // schedule new Notification
    this.notif.scheduleNotif(300, 'minute') // the first notify in 5 minutes and after repeat by minutes

    AsyncStorage.setItem('@Flashcards:notification', 1)
  }

  render() {
    const {
      now,
      correct,
      remember,
      incorrect,
      answerIsVisible,
    } = this.state
    const { decks } = this.props
    const { deckSelected } = decks
    const { questions } = deckSelected

    return (
      <VerticalSlideAnimation>
        {now > questions.length && remember
          ? this.updateRememberLocalNotification()
          : <Text />
        }
        {now > questions.length
          ? (
            <VerticalSlideAnimation>
              <BoxMessage isVisible correct={correct} incorrect={incorrect} />
              <View style={styles.buttons}>
                <Button
                  text="Restart"
                  theme="void"
                  onPress={() => this.restart()}
                  style={styles.buttonStyle}
                />
                <Button
                  text="Back to deck"
                  onPress={() => this.backToDeck()}
                />
              </View>
            </VerticalSlideAnimation>

          )
          : (
            <VerticalSlideAnimation>
              <View style={styles.question}>
                <Text style={styles.questionText}>{`${now}/${questions.length}`}</Text>
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
  decks: PropTypes.shape({
    deckSelected: PropTypes.shape({
      questions: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

const mapStateToProps = state => ({
  decks: state.flashcard,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
