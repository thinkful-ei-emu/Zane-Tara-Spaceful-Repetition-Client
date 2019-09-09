import config from '../config';
import TokenService from '../services/token-service'

let LanguagesService={

  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
}

export default LanguagesService