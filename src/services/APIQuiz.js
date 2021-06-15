const getAPIQuiz = () => {
  const local = localStorage.getItem('token');
  const urlQuiz = `https://opentdb.com/api.php?amount=5&token=${local}`;

  const fetchQuiz = fetch(urlQuiz)
    .then((response) => (
      response
        .json()
        .then((json) => json)
        .catch((error) => error)
    ));
  return fetchQuiz;
};

export default getAPIQuiz;
