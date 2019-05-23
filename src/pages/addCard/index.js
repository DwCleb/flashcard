import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native'
import PropTypes from 'prop-types';
import Button from 'components/Button'
import styles from './styles'

class AddCard extends Component {

  static navigationOptions = () => ({
    title: "Add Card",
  });

  state = {
    question: '',
    answer: '',
  }

  addCard = () => {
    const { question, answer } = this.state

    if (question.length < 1 || answer.length < 1) {
      Alert.alert(
        'Ops, this is empty!',
        'You need put something in these fields.',
        [
          { text: 'Ok' },
        ],
        { cancelable: false },
      );
    }
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
          <Button text="Submit" style={{ width: '50%' }} onPress={this.addCard} />
        </View>
      </View>
    )
  }
}

AddCard.propTypes = {
};

export default AddCard
