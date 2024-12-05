import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksActionCreator } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    decksApi.fetchDecks().then((res) => {
      dispatch(setDecksActionCreator(res.data.items))
    })
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((el) => (
        <DeckItem deck={el} key={el.id} />
      ))}
    </ul>
  )
}
