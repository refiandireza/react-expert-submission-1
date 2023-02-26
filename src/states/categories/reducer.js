import { ActionType } from './action';

const initialState = {
  value: [],
  selectedCategory: null,
};

function categoriesReducer(category = initialState, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return {
        ...category,
        value: category.value.concat(action.payload.threads.map((thread) => thread.category)),
      };
    case ActionType.SET_CATEGORIES:
      return {
        ...category,
        selectedCategory: action.payload.category,
      };
    case ActionType.CLEAR_CATEGORIES:
      return {
        ...category,
        selectedCategory: null,
      };
    default:
      return category;
  }
}

export default categoriesReducer;
