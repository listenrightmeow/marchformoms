import axios from 'axios';

const env = process.env;

export function event(selector, payload = {}) {
  return function action(dispatch) {
    const request = axios({
      method: 'GET',
      url: `${env.FACEBOOK_API}/${env.FACEBOOK_VERSION}/${env.APP_PAGE}/events?access_token=${env.FACEBOOK_TOKEN}`
    });

    return request.then((response) => {
      dispatch({
        type: selector,
        payload: {
          body: response.data.data[response.data.data.length - 1],
          pending: false
        }
      });
    });
  }
}
