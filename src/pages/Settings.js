import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import action, { fetchAPICategories } from '../actions/index';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitSearchParams = this.submitSearchParams.bind(this);

    this.state = {
      category: null,
      difficulty: null,
      type: null,
    };
  }

  componentDidMount() {
    const { categories } = this.props;
    categories();
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  submitSearchParams() {
    const { searchParams } = this.props;
    const { category, difficulty, type } = this.state;
    searchParams({
      type: 'PARAMETERS',
      payload: {
        category,
        difficulty,
        type,
      },
    });
  }

  render() {
    const { APICategories } = this.props;
    return (
      <main>
        <h1 data-testid="settings-title">Configurações</h1>
        <form>
          Category:
          <select name="category" onChange={ this.handleChange }>
            <option key="00" value="all" defaultValue>All</option>
            { APICategories.map((entry, index) => (
              <option
                key={ index }
                value={ entry.id }
              >
                { entry.name }
              </option>
            ))}
          </select>
          <br />
          Difficulty:
          <select name="difficulty" onChange={ this.handleChange }>
            <option key="0" value="" defaultValue>All</option>
            <option key="1" value="easy" defaultValue>Easy</option>
            <option key="2" value="medium" defaultValue>Medium</option>
            <option key="3" value="hard" defaultValue>Hard</option>
          </select>
          <br />
          Type:
          <select name="type" onChange={ this.handleChange }>
            <option key="0" value="" defaultValue>All</option>
            <option key="1" value="multiple" defaultValue>Multiple Choice</option>
            <option key="2" value="boolean" defaultValue>True/False</option>
          </select>
          <br />
          <br />
          <Link to="/">
            <button
              type="submit"
              onClick={ this.submitSearchParams }
            >
              Salvar
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  categories: () => dispatch(fetchAPICategories()),
  searchParams: (state) => dispatch(action(state)),
});

const MapStateToProps = (state) => ({
  APICategories: state.categories.categories,
});

Settings.propTypes = ({
  categories: PropTypes.function,
}).isRequired;

export default connect(MapStateToProps, MapDispatchToProps)(Settings);
