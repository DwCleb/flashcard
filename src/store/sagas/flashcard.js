import { AsyncStorage } from 'react-native'
import { put } from 'redux-saga/effects'

import {
  Creators as FlashcardsActions,
} from 'store/ducks/flashcard'


export function* loadDecks() {
  try {
    const deck = yield AsyncStorage.getItem('@Flashcards:decks')
    const notify = yield AsyncStorage.getItem('@Flashcards:notification')
    console.tron.log("saga", notify)
    const decks = deck == null ? [] : JSON.parse(deck)

    yield put(FlashcardsActions.setNotification(notify))
    yield put(FlashcardsActions.setDecks(decks))
  } catch (err) {
    yield put(FlashcardsActions.setMessage(err.response.data.message))
  }
}

export function* setSelectedDeck(action) {
  try {
    const deckSelected = action.payload.card
    yield put(FlashcardsActions.deckSelected(deckSelected))
  } catch (err) {
    yield put(FlashcardsActions.setMessage(err.response.data.message))
  }
}

export function* addDeck(action) {
  try {
    const { title } = action.payload

    yield put(FlashcardsActions.pushDeck(title))
  } catch (err) {
    yield put(FlashcardsActions.setMessage(err.response.data.message))
  }
}

export function* addCard(action) {
  try {
    const { card } = action.payload

    yield put(FlashcardsActions.pushCard(card))
  } catch (err) {
    yield put(FlashcardsActions.setMessage(err.response.data.message))
  }
}