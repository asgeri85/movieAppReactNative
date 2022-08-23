import {Alert} from 'react-native';

export default function (state, action) {
  switch (action.type) {
    case 'ADD_FILM': {
      const {film} = action.payload;
      const find = state.filmList.find(item => item.id === film.id);
      if (!find) {
        const newList = [...state.filmList, film];
        return {...state, filmList: newList};
      } else {
        Alert.alert('Error', 'The movie is on the list');
        return state;
      }
    }

    case 'REMOVE_FILM': {
      const {id} = action.payload;
      const removeList = state.filmList.filter(item => item.id !== id);
      return {...state, filmList: removeList};
    }

    default: {
      return state;
    }
  }
}
