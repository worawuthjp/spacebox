import actionType from './actionType';

const initialState = {
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}

export default reducer;
