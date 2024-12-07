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
    case 'ADD/DECKS-ACTION-CREATOR':
      return {
        ...state,
        decks: [action.decks, ...state.decks],
      }
    default:
      return state
  }
}

export const setDecksActionCreator = (decks: Decks[]) => {
  return {
    type: 'SET/DECKS-ACTION-CREATOR',
    decks,
  } as const
}

export const addDecksActionCreator = (decks: Decks) => {
  return {
    type: 'ADD/DECKS-ACTION-CREATOR',
    decks,
  } as const
}

export type SetDecksActionType = ReturnType<typeof setDecksActionCreator>
export type AddDecksActionType = ReturnType<typeof addDecksActionCreator>

type DecksActions = SetDecksActionType | AddDecksActionType
