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
      <div className="container">
        {/* {this.props.nasaData} */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    nasaData: state
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchNasaData: (type) => dispatch(fetchNasaData(type))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
