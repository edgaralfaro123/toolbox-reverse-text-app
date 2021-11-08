
const stateInitial = {
    list: []
}

export default function ListReducer(state = stateInitial, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const {list} = action.payload
      return {
          ...state,
          list,
      };
    default:
      return state;
  }
}