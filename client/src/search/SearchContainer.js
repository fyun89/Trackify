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
  }

  changeOption(n) {
    //this.setState({selectedOption: n});
    const target = n.target.value;
    if (target) {
      console.log('change options', target);
      this.setState({selectedOption: target})
    }
  }

  render() {
    const changeOption = this.changeOption;
    const options = this.state.options;
    const selectedOption = this.state.selectedOption;
    return (
      <div className="searchContainer">
        <SearchBar />
        <SearchOptions selectedOption={selectedOption} changeOptions={changeOption} options={options}/>
        <ResultsContainer />
      </div>
    );
  }
}

export default SearchContainer;
