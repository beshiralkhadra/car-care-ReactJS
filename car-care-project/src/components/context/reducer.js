const reducer = (state, action) => {
  if (action.type === "ADD_EXP") {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      expenses: state.expenses.filter((val) => val.id !== action.payload),
    };
  }
  if (action.type === "SET_SUBMITTED") {
    return { ...state, submitted: true };
  }
  if (action.type === "SET_LOGGED") {
    return { ...state, logged: true };
  }
  if (action.type === "SET_LOGOUT") {
    return { ...state, logged: false };
  }
};

export default reducer;
