import { createStore } from "redux";

// const reducer = (state, action) => {
//     if(action.type === 'increment') {
//         return {...state, total: action.payload}
//     }
//     if(action.type === 'user') {
//         return {...state, user: action.payload}
//     }
//     return state
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, total: action.payload };
      break;

    case "user":
      return { ...state, user: [{ ...state.user }, action.payload] };
      break;

    case "todo":
      return { ...state, todo: [...state.todo, action.payload] };
      break;

    default:
      return state;
      break;
  }
};

export const store = createStore(reducer, { total: 0, user: [], todo: [] });
console.log("state :>> ", store.getState());

store.dispatch({ type: "increment", payload: 11 });

store.dispatch({ type: "user", payload: 3 }); 
console.log("state :>> ", store.getState());

store.dispatch({ type: "todo", payload: "tits" });
console.log("state :>> ", store.getState());
