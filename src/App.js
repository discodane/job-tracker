import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';
import myData from './makeShiftDB.json';

import MainContent from './components/MainContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mavs: myData.mavs,
      emailLink: '',
      jobPostingLink: '',
      companyName: '',
    }
  }

  addNewMav = e => {
    e.preventDefault();
    this.setState((previousState, props) => {
      return {
        mavs: [
          {
            emailLink: this.state.emailLink,
            jobPostingLink: this.state.jobPostingLink,
            companyName: this.state.companyName,
            status: "pending",
          },
          ...this.state.mavs,
        ],
        emailLink: '',
        jobPostingLink: '',
        companyName: '',
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

  handleCompanyNameChange = e => {
    e.preventDefault();
    return this.setState({companyName: e.target.value});
  }

  putToRejection = companyName => {
    this.setState({
      mavs: this.state.mavs.map((mav) => {
        if(companyName === mav.companyName) {
          return {
            ...mav,
            status: "reject"
          }
        }
        return mav;
      })
    })
  }

  putToFollowUp = companyName => {
    this.setState({
      mavs: this.state.mavs.map((mav) => {
        if(companyName === mav.companyName) {
          return {
            ...mav,
            status: "followUp"
          }
        }
        return mav;
      })
    })
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
        <MainContent
          addNewMav={this.addNewMav}
          companyName={this.state.companyName}
          emailLink={this.state.emailLink}
          jobPostingLink={this.state.jobPostingLink}
          handleEmailChange={this.handleEmailChange}
          handleJobUrlChange={this.handleJobUrlChange}
          handleCompanyNameChange={this.handleCompanyNameChange}
          putToRejection={this.putToRejection}
          putToFollowUp={this.putToFollowUp}
          mavs={this.state.mavs}
        />
      </div>
    );
  }
}

export default App;
