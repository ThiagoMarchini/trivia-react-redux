const url = 'https://www.gravatar.com/avatar/';

const getAPIGravatar = (hash) => {
  const fetchGravatar = fetch(url + hash)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  console.log(fetchGrava);
  return fetchGravatar;
};

export default getAPIGravatar;
