import { put } from 'redux-saga/effects'

import {
  Creators as CardActions,
} from 'store/ducks/card'


export function* loadCards() {
  try {
    const cards = [
      {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ]
    yield put(CardActions.setCards(cards))
  } catch (err) {
    yield put(CardActions.setMessage(err.response.data.message))
  }
}

export function* setSelectedCard(action) {
  try {
    const cardSelected = action.payload.card

    yield put(CardActions.cardSelected(cardSelected))
  } catch (err) {
    yield put(CardActions.setMessage(err.response.data.message))
  }
}

export function* addDeck(action) {
  try {
    const { title } = action.payload

    yield put(CardActions.pushDeck(title))
  } catch (err) {
    yield put(CardActions.setMessage(err.response.data.message))
  }
}

export function* addCard(action) {
  try {
    const { deck } = action.payload

    yield put(CardActions.pushCard(deck))
  } catch (err) {
    yield put(CardActions.setMessage(err.response.data.message))
  }
}