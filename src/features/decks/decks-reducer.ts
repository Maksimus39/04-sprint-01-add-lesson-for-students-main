import { Decks } from './decks-api.ts'

const initialState = {
  decks: [] as Decks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET/DECKS-ACTION-CREATOR':
      return {
        ...state,
        decks: action.decks,
      }
    default:
      return state
  }
}

export type SetDecksActionType = ReturnType<typeof setDecksActionCreator>
export const setDecksActionCreator = (decks: Decks[]) => {
  return {
    type: 'SET/DECKS-ACTION-CREATOR',
    decks,
  }
}

type DecksActions = SetDecksActionType
