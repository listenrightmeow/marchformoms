const initial = { remaining: false };

export default function countdown(state = initial, action = null) {
  let response;

  switch (action.type) {
    case 'EVENT::COUNTDOWN::TICK':
      response = Object.assign({}, state, {
        remaining: action.payload.remaining
      });
    break;
    default:
      response = state;
  }

  return response;
}
