import { combineReducers } from 'redux';

import bootstrap from 'reducers/default';
import countdown from 'reducers/countdown';
import event from 'reducers/event';
import modal from 'reducers/modal';

export default combineReducers({
  bootstrap,
  countdown,
  event,
  modal
});
