const initial = { data: { active: false, product: false, verification: false } };

export default function content(state = initial, action = null) {
  let response;

  switch (action.type) {
    case 'EVENT::MODAL::ACTION':
      response = Object.assign({}, state, {
        data: action.payload
      });
    break;
    default:
      response = state;
  }

  return response;
}
