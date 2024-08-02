import { create } from 'zustand'
import { Character } from '../interfaces/Character'

interface FavoritesState {
  favorites: Character[]
  addFavorite: (character: Character) => void
  initFavorites: (favorites: Character[]) => void
}

const addFavorite = (state: FavoritesState, character: Character)=>{
    let favorites = state.favorites
    if(favorites.find(fav=> fav.id === character.id)){
        favorites = favorites.filter(fav=> fav.id !== character.id);
    }else{
        favorites = [...favorites, character]
    }
    localStorage.setItem("favorites", JSON.stringify(favorites))
    return {favorites}
}

export const useFavoriteStore = create<FavoritesState>()((set) => ({
  favorites: [],

  addFavorite: (id) => {
    set((state)=> {
       return addFavorite(state, id)
    })
  },
  initFavorites: (favorites) => {
    set((state)=> ({favorites}))
  }
}))