import React from 'react';
import logo from './logo.svg';
import './App.css';

function ClassName(props){
  return(
    <div>
      <p>{props.value}</p>
    </div>
  );
}

class ClassFeed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {liveStudies: []};
    
  }

  getSessions(NewClassName){
    //Add the post request here in order to obtain get posted study sessions
    this.state.liveStudies[0] = "EECS 280";
    this.state.liveStudies[1] = "EECS 370";
  }

  render(){
    this.getSessions();
    return(
      <div>
        <ClassName value={this.state.liveStudies[0]}/>
        <ClassName value ={this.state.liveStudies[1]} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="LiveFeed">
      <p>TEST</p>
      <ClassFeed />
    </div>
  );
}

export default App;
