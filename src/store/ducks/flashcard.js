import { AsyncStorage } from 'react-native'
export const Types = {
  LOAD_DECKS: 'flashcard/LOAD_DECKS',
  SET_DECKS: 'flashcard/SET_DECKS',
  SET_SELECTED_DECK: 'flashcard/SET_SELECTED_DECK',
  DECK_SELECTED: 'flashcard/DECK_SELECTED',
  ADD_DECK: 'flashcard/ADD_DECK',
  PUSH_DECK: 'flashcard/PUSH_DECK',
  ADD_CARD: 'flashcard/ADD_CARD',
  PUSH_CARD: 'flashcard/PUSH_CARD',
  SET_MESSAGE: 'flashcard/SET_MESSAGE',
}

const initialState = {
  decks: [],
  message: null,
  deckSelected: {},
}

export default function flashcard(state = initialState, action) {
  let decks = []
  switch (action.type) {
    case Types.SET_DECKS:
      return {
        ...state,
        decks: action.payload.decks,
      }
    case Types.SET_SELECTED_DECK:
      return {
        ...state,
        deckSelected: action.payload.deckSelected,
      }
    case Types.PUSH_DECK:
      decks = [
        ...state.decks,
        {
          title: action.payload.title,
          questions: [],
        },
      ]
      AsyncStorage.setItem('@Flashcards:decks', JSON.stringify(decks))
      return { ...state, decks }
    case Types.ADD_CARD:
      decks = action.payload.decks
      AsyncStorage.removeItem('@Flashcards:decks')
      AsyncStorage.setItem('@Flashcards:decks', JSON.stringify(decks))
      return { ...state, decks }
    case Types.SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      }
    default:
      return state
  }
}

export const Creators = {
  loadDecks: () => ({
    type: Types.LOAD_DECKS,
  }),

  setDecks: (decks = []) => ({
    type: Types.SET_DECKS,
    payload: {
      decks,
    }
  }),

  setSelectedDeck: (deckSelected = []) => ({
    type: Types.SET_SELECTED_DECK,
    payload: {
      deckSelected,
    }
  }),

  deckSelected: (deckSelected = []) => ({
    type: Types.DECK_SELECTED,
    payload: {
      deckSelected,
    }
  }),

  addDeck: (title = '') => ({
    type: Types.ADD_DECK,
    payload: {
      title,
    }
  }),

  pushDeck: (title = '') => ({
    type: Types.PUSH_DECK,
    payload: {
      title,
    }
  }),

  addCard: (decks = []) => ({
    type: Types.ADD_CARD,
    payload: {
      decks,
    }
  }),

  pushCard: (decks = []) => ({
    type: Types.PUSH_CARD,
    payload: {
      decks,
    }
  }),

  setMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: {
      message,
    }
  }),

}
