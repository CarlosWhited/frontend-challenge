const initialState = {
  name: '',
  email: '',
  password: '',
  color: '',
  terms: false,
}

export function update(state, payload) {
  console.log("state:", state);
  console.log("payload:", payload);
  return {
    ...state,
    ...payload
  };
}

export function reset() {
  return initialState;
}