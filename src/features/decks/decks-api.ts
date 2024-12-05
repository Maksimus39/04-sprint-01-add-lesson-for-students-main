import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


export const decksApi = {
  fetchDecks(){
    return instance.get<Decks>('/v2/decks')
  }
}




interface Author {
  id: string;
  name: string;
}

interface Item {
  isFavorite: boolean;
  author: Author;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  cardsCount: number;
}

interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

interface Decks {
  items: Item[];
  pagination: Pagination;
}
