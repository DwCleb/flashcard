export const Types = {
  LOAD_CARDS: 'card/LOAD_CARDS',
  SET_CARDS: 'card/SET_CARDS',
  SET_SELECTED_CARD: 'card/SET_SELECTED_CARD',
  CARD_SELECTED: 'card/CARD_SELECTED',
  ADD_DECK: 'card/ADD_DECK',
  PUSH_DECK: 'card/PUSH_DECK',
  ADD_CARD: 'card/ADD_CARD',
  PUSH_CARD: 'card/PUSH_CARD',
  SET_MESSAGE: 'card/SET_MESSAGE',
}

const initialState = {
  cards: [],
  message: null,
  cardSelected: {},
}

export default function card(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CARDS:
      return {
        ...state,
        cards: action.payload.cards,
      }
    case Types.CARD_SELECTED:
      return {
        ...state,
        cardSelected: action.payload.cardSelected,
      }
    case Types.PUSH_DECK:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            title: action.payload.title,
            questions: [],
          },
        ]
      }
    case Types.PUSH_CARD:
      return {
        ...state,
        cards: action.payload.cards,
      }
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
  loadCards: () => ({
    type: Types.LOAD_CARDS,
  }),

  setCards: (cards = []) => ({
    type: Types.SET_CARDS,
    payload: {
      cards,
    }
  }),

  setSelectedCard: (card = []) => ({
    type: Types.SET_SELECTED_CARD,
    payload: {
      card,
    }
  }),

  cardSelected: (cardSelected = []) => ({
    type: Types.CARD_SELECTED,
    payload: {
      cardSelected,
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

  addCard: (cards = []) => ({
    type: Types.ADD_CARD,
    payload: {
      cards,
    }
  }),

  pushCard: (cards = []) => ({
    type: Types.PUSH_CARD,
    payload: {
      cards,
    }
  }),

  setMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: {
      message,
    }
  }),

}
