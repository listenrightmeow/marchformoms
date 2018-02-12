import MixpanelClient from './mixpanel.js';

class Mixpanel {

  constructor(options) {
    if (typeof window.mixpanel === 'undefined') MixpanelClient.init(options.token);

    this.models = options.models;
  }

  track(state) {
    if (state.hasOwnProperty('eventType') && !!state.eventType) {
      window.mixpanel.track(state.eventType, this.dataGenerator(state));
    }
  }

  dataGenerator(state) {
    const data = {};
    this.models[state.eventType].forEach((key) => {
      if (!!state.hasOwnProperty(key)) data[key] = state[key];
    });
    return data;
  }
}

export default Mixpanel;
