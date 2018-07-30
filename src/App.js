import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader> 
          Job Tracker
          <small className="subpage-header">
            An app for maintaining jobs for which I've applied
          </small>
        </PageHeader>
      </div>
    );
  }
}

export default App;
