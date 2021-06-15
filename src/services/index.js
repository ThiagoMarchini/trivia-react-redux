const url = 'https://opentdb.com/api_token.php?command=request';

const getAPIToken = () => {
  const fetchToken = fetch(url)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  return fetchToken;
};

export default getAPIToken;
