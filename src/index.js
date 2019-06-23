//Import react and reactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';
//webpack enables us not to put .js at the end.



//Create a react component


//
//We are extending React.Component because it gives us alot of useful functionality to use
  //React says we have to define render!
  //update state by using function setState
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat:null,errorMessage: ''
    };
  }
  componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({lat: position.coords.latitude}),
    (err) => this.setState({errorMessage: err.message})
      ); 
    }
  //Right before the component did update is called render is called
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>

    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request"/>
    
      
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
   
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));