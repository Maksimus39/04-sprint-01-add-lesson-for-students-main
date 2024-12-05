import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { decksSelectors } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksThunkCreator } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(decksSelectors)

  useEffect(() => {
    dispatch(fetchDecksThunkCreator())
  }, [dispatch])

  return { decks }
}
