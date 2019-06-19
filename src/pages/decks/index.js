import React, { Component } from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
  AsyncStorage,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import DeckCard from 'components/DeckCard'
import VerticalSlideAnimation from 'components/vertical-slide-animation'
import Button from 'components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as FlashcardsActions } from 'store/ducks/flashcard'
import NotifService from 'NotifService'
import appConfig from '../../../app.json'

class Decks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderId: appConfig.senderID
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

  handlePerm(perms) {
    Alert.alert("Permissions", JSON.stringify(perms));
  }

  componentDidMount() {
    this.getDecks()
  }


  getDecks = async () => {
    const { loadDecks } = this.props
    await loadDecks()
    //AsyncStorage.setItem('@Flashcards:notification', 0)
    const notify = await AsyncStorage.getItem('@Flashcards:notification')
    //console.tron.log("SCYN", notify)
    if (notify != null) {
      if (notify != 1) {
        this.notif.cancelAll()
        await AsyncStorage.setItem('@Flashcards:notification', 1)
        this.notif.scheduleNotif(300, 'minute') // the first notify in 5 minutes and after repeat by minutes
      }
    }
  }

  _keyExtractor = index => index.toString()

  _rendeItem = ({ item, index }) => {
    return (
      <DeckCard data={item} onPress={() => this.deckScreen(item)} />
    )
  }

  deckScreen = async (deck) => {
    const { navigation, setSelectedDeck } = this.props
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
          {decks.length > 0
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
            : <Text style={styles.noDecks}> You need add decks </Text>
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
  notification: state.flashcard.notification,
})

const mapDispatchToProps = dispatch => bindActionCreators(FlashcardsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
