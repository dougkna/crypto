import { server } from './data';

export const fetchPrice = (cryptos) => {
  return fetch(`${server}/prices/getPrice`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cryptos)
  })
    .then(res => {
      return res.json();
    })
    .catch(e => {
      console.log("ERROR fetching prices", e);
      return;
    });
}