const initialState = {
  safesList: [],
  title: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        safesList: [...state.safesList, action.payload],
      };
    case "CHANGE":
      return {
        title: action.payload,
      };
    default:
      return state;
  }
}
