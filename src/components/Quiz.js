import React, { Component } from 'react';
import { connect } from 'react-redux';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questions: [],
    };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    const local = localStorage.getItem('token');
    const urlQuiz = `https://opentdb.com/api.php?amount=5&token=${local}`;
    fetch(urlQuiz)
      .then((response) => (
        response
          .json()
          .then((json) => this.setState({
            questions: json.results,
          }))
          .catch((error) => error)
      ));
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    let currentIndex = array.length; let
      randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  nextQuestion() {
    const { index } = this.state;
    this.setState({
      index: index + 1,
    });
  }

  render() {
    const { questions, index } = this.state;
    const array = questions;
    if (array.length === 0) {
      return (
        <h1>Loading...</h1>
      );
    }
    // const right = array[index].correct_answer;
    const answers = [array[index].correct_answer, ...array[index].incorrect_answers];
    this.shuffle(answers);
    console.log(answers);
    // const { question, category, correct_answer, incorrect_answers} = array[0];
    // console.log(array[0]);

    return (

      <div>

        {/*
<p>category[i]</p>
<p>question[i] </p>
<p>map(shuffle(array=[correct_answer[i], incorrect_answers[i]]))</p>

*/}

        <h6 data-testid="question-category">{array[index].category}</h6>
        <div data-testid="question-text">{array[index].question}</div>
        <div>resposta1</div>
        <div>resposta2</div>
        <div>resposta3</div>
        <div>resposta4</div>
        <button
          data-testid="btn-next"
          type="button"
          onClick={ this.nextQuestion }
        >
          Próxima
        </button>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  tokenKey: state.token.key,
});

export default connect(MapStateToProps)(Quiz);
