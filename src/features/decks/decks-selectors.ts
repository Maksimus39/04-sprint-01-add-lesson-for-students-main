import { AppRootState } from '../../app/store.ts'

export const decksSelectors = (state: AppRootState) => state.decksReducer.decks
