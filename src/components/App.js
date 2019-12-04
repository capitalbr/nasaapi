import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchNasaData } from '../actions/nasa_actions';


class App extends React.Component {
  

  componentDidMount(){
    this.props.fetchNasaData("getAsteroidStats");
  }
  
  render(){
    return (
      <div className="dropdown ml-5">
        <button 
          className="btn btn-secondary dropdown-toggle" 
          data-toggle="dropdown"
          type="button"
          id="dropdownMenuButton"
          aria-haspopup="true" 
          aria-expanded="false">
          Choose Nasa Data
        </button>
        <div 
          className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">test</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    nasaData: state.nasa
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchNasaData: (type) => dispatch(fetchNasaData(type))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
