import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
}

export type FetchDecksResponse = {
  items: Decks[]
  pagination: Pagination
}

export type Author = {
  id: string
  name: string
}

export type Decks = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
