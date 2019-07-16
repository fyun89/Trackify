import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import ResultDetail from './ResultDetail';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOvered: false,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.combineDataToStr = this.combineDataToStr.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleDynamicResults = this.handleDynamicResults.bind(this);
    this.handleLabelConversion = this.handleLabelConversion.bind(this);
    this.handleTimeConversion = this.handleTimeConversion.bind(this);
  }

  combineDataToStr(arr) {
    let str = arr.reduce((acc, elem, i) => {
        return !i ? (acc += `${elem.name || elem}`) : (acc += `, ${elem.name || elem}`); //genre: elem, artist: elem.name
        }, '');
    return str;
  }

  handleTimeConversion(e) {
    const m = Math.floor(e / 60000);
    const s = ((e % 60000) / 1000).toFixed(0);
    return m + ":" + (s < 10 ? '0' : '') + s;
  }

  handleData(data, purpose) {
    //console.log('handledata: ', data, 'option: ', option)
    let output = null;
    switch (purpose) {
      case 'image': 
        //images exist?
        if (!data.images) {
          const images = data.album.images;
          output = images[images.length - 1].url;
        } else if (data.images.length) {
        //images have more than one items?
          const images = data.images;
          output = images[images.length - 1].url;
        } else {
        //album.images doesn't have any images
          output = null;
        } break;
      case 'name': output = data.name.slice(0, 30); break; // limited 30 char
      case 'artists': output = this.combineDataToStr(data.artists).slice(0, 30); break; // limited to 30 char
      case 'album': output = data.album.name; break;
      case 'duration': output = `${this.handleTimeConversion(data.duration_ms)}`; break;
      case 'link': output = <a href={`${data.external_urls.spotify}`} target="_blank" rel="noopener noreferrer">Click to Visit</a>; break;
      case "genres": output = this.combineDataToStr(data.genres); break;
      case "followerCount": output = data.followers.total; break;
      case "releaseDate": output = data.release_date; break;
      case "trackCount": output = data.totaltracks; break;
      default: console.error('no matching purpose found in ResultsContainer');
    }
    return output;
  }

  handleMouseOver(e) {
    e.preventDefault();
    const isMouseOvered = this.state.mouseOvered;
    isMouseOvered ? this.setState({mouseOvered: false}) : this.setState({mouseOvered: true});
  }

  handleDynamicResults(e) {
    let result = [];
    switch(e.type) {
      case 'track': result = ['name', 'artists', 'album', 'duration', 'link']; break;
      case 'artist': result = ['name', 'genres', 'followerCount', 'link']; break;
      case 'album': result = ['name', 'artists', 'releaseDate', 'trackCount', 'link']; break;
      default: console.error('no matching option found in ResultsContainer');
    }
    return result;
  }

  handleLabelConversion(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).replace(/([A-Z])/g, ' $1').trim();
  }

  render() {
    const handleMouseOver = this.handleMouseOver;
    const handleData = this.handleData;
    const isMouseOvered = this.state.mouseOvered;
    const { data } = this.props;
    const handleDynamicResults = this.handleDynamicResults;
    const handleLabelConversion = this.handleLabelConversion;
    //console.log('data at results', JSON.stringify(data))
      return (
        <Col sm="6">
          <div onMouseEnter={(e) => handleMouseOver(e)} onMouseLeave={(e) => handleMouseOver(e)} id="result">
            <img id="albumArt" src={handleData(data, 'image')} alt={`album img ${data.name}`}></img>
            <div id="info-basic">
              {/* slice(0,3) represents basic info; indexes after are shown in detail */}
              {handleDynamicResults(data).slice(0, 3).map(e => (
                <div key={'key_' + e}>
                {`${handleLabelConversion(e)}: `}{handleData(data, e)}
                </div>
              ))}
            </div>
            {isMouseOvered ? <ResultDetail handleDynamicResults={handleDynamicResults} handleLabelConversion={handleLabelConversion} handleData={handleData} data={data}/> : null}
          </div>
        </Col>
      );
  }
}

export default Result;
