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
      selectedOption: 0,
      page: 1,
    };
  }

  changeOption(n) {
    //this.setState({selectedOption: n});
    const target = n.target.value;
    if (target) console.log('change options', n.target.value)
  }

  render() {
    const changeOption = this.changeOption;
    const options = this.state.options;
    return (
      <div>
        <SearchBar />
        <SearchOptions changeOptions={changeOption} options={options}/>
        <ResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
