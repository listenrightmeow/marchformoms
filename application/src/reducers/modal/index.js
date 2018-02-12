const initial = { data: { active: false, bulk: false, confirm: false } };

export default function modal(state = initial, action = null) {
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
