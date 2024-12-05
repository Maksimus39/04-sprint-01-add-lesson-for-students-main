import { Dispatch } from 'redux'
import { setDecksActionCreator } from './decks-reducer.ts'
import { decksApi } from './decks-api.ts'

export const fetchDecksThunkCreator = () => (dispatch: Dispatch) => {
  decksApi.fetchDecks().then((res) => {
    dispatch(setDecksActionCreator(res.data.items))
  })
}
