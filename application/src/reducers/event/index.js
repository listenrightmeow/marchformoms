const initial = { data: { pending: true, remaining: false } };

export default function event(state = initial, action = null) {
  let response;

  switch (action.type) {
    case 'APP::PAGE::LOAD':
      response = Object.assign({}, state, {
        data: action.payload.body,
        pending: action.payload.pending
      });
    break;
    default:
      response = state;
  }

  return response;
}
