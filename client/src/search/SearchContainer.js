import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchOptions from './SearchOptions';
import ResultsContainer from '../results/ResultsContainer';
import './search.css';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['All', 'Songs', 'Artists', 'Albums'],
      selectedOption: 'All',
      page: 1,
    };
    this.changeOption = this.changeOption.bind(this);
    this.query = this.query.bind(this);
  }

  query(e) {
    fetch(`http://localhost:3001/getToken?query=${e}`)
    .then(res => res.json())
    .then(res => {
      console.log('tracks', res.tracks.items)
      console.log('artist', res.artists.items)
      })
    console.log('query', e)
  }

  changeOption(e) {
    const target = e.target.value;
    if (target) {
      console.log('change options', target);
      this.setState({selectedOption: target})
    }
  }

  render() {
    const changeOption = this.changeOption;
    const options = this.state.options;
    const selectedOption = this.state.selectedOption;
    const query = this.query;
    return (
      <div className="searchContainer">
        <SearchBar query={query}/>
        <SearchOptions selectedOption={selectedOption} changeOptions={changeOption} options={options}/>
        <ResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
