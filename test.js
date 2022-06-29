const BASE_URL = "https://api.harvardartmuseums.org";
const KEY = "apikey=c205225a-af2b-4b98-bb53-62f7928cf273"; // USE YOUR KEY HERE

function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}

fetchObjects();
