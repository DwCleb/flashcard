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

class NewDeck extends Component {

  state = {
    deckTitle: '',
  }

  addNewDeck = () => {
    const { deckTitle } = this.state

    if (deckTitle.length < 1) {
      Alert.alert(
        'Ops, this is empty!',
        'You need a title to create one deck.',
        [
          { text: 'Ok' },
        ],
        { cancelable: false },
      );
    }
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
          <Button text="Submit" style={{ width: '50%' }} onPress={this.addNewDeck} />
        </View>
      </View>
    )
  }
}

NewDeck.propTypes = {
};

export default NewDeck
