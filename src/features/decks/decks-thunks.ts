import { Dispatch } from 'redux'
import { addDecksActionCreator, setDecksActionCreator } from './decks-reducer.ts'
import { AddTeckParams, decksApi } from './decks-api.ts'

export const fetchDecksThunkCreator = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksActionCreator(res.data.items))
  })
}

export const addhDecksThunkCreator = (params: AddTeckParams) => (dispatch: Dispatch) => {
  decksApi.addDeck(params).then((res) => {
    dispatch(addDecksActionCreator(res.data))
  })
}
