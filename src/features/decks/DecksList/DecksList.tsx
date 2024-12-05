import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { decksSelectors } from '../decks-selectors.ts'
import { fetchDecksThunkCreator } from '../decks-thunks.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(decksSelectors)

  useEffect(() => {
    dispatch(fetchDecksThunkCreator())
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((el) => (
        <DeckItem deck={el} key={el.id} />
      ))}
    </ul>
  )
}
