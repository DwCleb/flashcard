import { all, takeLatest } from 'redux-saga/effects'

import { Types as FlashcardsTypes } from 'store/ducks/flashcard'

import {
  loadDecks,
  setSelectedDeck,
  addDeck,
} from './flashcard'

export default function* rootSaga() {
  return yield all([
    // FlashcardsTypes
    takeLatest(FlashcardsTypes.LOAD_DECKS, loadDecks),
    takeLatest(FlashcardsTypes.SET_SELECTED_DECK, setSelectedDeck),
    takeLatest(FlashcardsTypes.ADD_DECK, addDeck),
  ])
}
