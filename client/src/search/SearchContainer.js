import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchOptions from './SearchOptions';
import ResultsContainer from '../results/ResultsContainer';
import './search.css';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Top Results', 'Songs', 'Artists', 'Albums'],
      selectedOption: 'Top Results',
      page: 1,
      query: '',
      data: undefined,
      resultCount: {},
    };
    this.changeOption = this.changeOption.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(e) {
    fetch(`http://localhost:3001/getToken?query=${e}`)
    .then(res => res.json())
    .then(res => {
      console.log('tracks, artist, album', res.tracks.items, res.artists.items, res.albums.items)
      this.setState({
        data: {
        tracks: res.tracks.items,
        artists: res.artists.items,
        albums: res.albums.items,
        },
        resultCount: {
          all: res.tracks.total + res.artists.total + res.albums.total,
          tracks: res.tracks.total,
          artists: res.artists.total,
          albums: res.albums.total,
        },
        query: e,
      })

      })
  }

  changeOption(e) {
    const target = e.target.value;
    if (target) {
      // console.log('change options', target);
      this.setState({selectedOption: target})
    }
  }

  render() {
    const changeOption = this.changeOption;
    const { options, query, data, resultCount } = this.state
    const selectedOption = this.state.selectedOption;
    const handleQuery = this.handleQuery;
    return (
      <div className="searchContainer">
        <SearchBar handleQuery={handleQuery}/>
        <SearchOptions resultCount={resultCount} selectedOption={selectedOption} changeOptions={changeOption} options={options}/>
        <br></br>
        {!data ? <h1>Search to see your results here</h1> 
        : <ResultsContainer query={query} options={options} selectedOption={selectedOption} data={data}/>}
      </div>
    );
  }
}

export default SearchContainer;
