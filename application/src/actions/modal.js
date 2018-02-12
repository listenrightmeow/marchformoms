export function trigger(selector, payload) {
  return (dispatch) => {
    dispatch({
      type: selector,
      payload: payload
    });
  }
}
