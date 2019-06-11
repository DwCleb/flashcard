export const Types = {
  LOAD_CARDS: 'card/LOAD_CARDS',
  SET_CARDS: 'card/SET_CARDS',
  SET_SELECTED_CARD: 'card/SET_SELECTED_CARD',
  CARD_SELECTED: 'card/CARD_SELECTED',
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

  setSelectedCard: (card=[]) => ({
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

  setMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: {
      message,
    }
  }),

}
