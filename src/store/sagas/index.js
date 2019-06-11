import { all, takeLatest } from 'redux-saga/effects'

import { Types as CardTypes } from 'store/ducks/card'

import {
  loadCards,
  setSelectedCard,
  addDeck,
} from './card'

export default function* rootSaga() {
  return yield all([
    // Card
    takeLatest(CardTypes.LOAD_CARDS, loadCards),
    takeLatest(CardTypes.SET_SELECTED_CARD, setSelectedCard),
    takeLatest(CardTypes.ADD_DECK, addDeck),
  ])
}
