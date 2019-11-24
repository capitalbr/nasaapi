import axios from "axios";


export const getNasaData = (type) => (
  axios.post(
    `https://nasaapidimasv1.p.rapidapi.com/${type}`,
    {},
    {
      headers: {
        "x-rapidapi-host": "NasaAPIdimasV1.p.rapidapi.com",
        "x-rapidapi-key": "49a02ad059mshb9593edcb853bc7p19befejsnb4fb51899d1e",
        "content-type": "application/x-www-form-urlencoded"
      }
    }
  )
);