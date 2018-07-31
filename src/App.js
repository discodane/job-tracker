import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';

import NewMavForm from './components/NewMavForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mavs: [],
      emailLink: '',
      jobPostingLink: '',
    }
  }

  addNewMav = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState((previousState, props) => {
      return {
        mavs: [
          {
            emailLink: this.state.emailLink,
            jobPostingLink: this.state.jobPostingLink,
            status: "pending",
          },
          ...this.state.mavs,
        ],
        emailLink: '',
        jobPostingLink: '',
      }
    });
  }

  handleEmailChange = e => {
    e.preventDefault();
    return this.setState({emailLink: e.target.value});
  }

  handleJobUrlChange = e => {
    e.preventDefault();
    return this.setState({jobPostingLink: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <PageHeader> 
          Job Tracker
          <small className="subpage-header">
            An app for maintaining jobs for which I've applied
          </small>
        </PageHeader>
        <NewMavForm 
          addMav={this.addNewMav} 
          emailLink={this.state.emailLink} 
          jobPostingLink={this.state.jobPostingLink} 
          emailChange={this.handleEmailChange}
          jobUrlChange={this.handleJobUrlChange}
        />
        <div>
          {this.state.mavs.map((mav) => 
          <div key={mav.jobPostingLink}>
            <div>{mav.emailLink}</div>
            <div>{mav.jobPostingLink}</div>
            <div>{mav.status}</div>
          </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
