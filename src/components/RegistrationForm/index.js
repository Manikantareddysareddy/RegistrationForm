import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    errorMsg: false,
    errorMsg1: false,
    firstNameInput: '',
    lastNameInput: '',
    registrationProcess: false,
  }

  onSubmitRegistration = event => {
    const {firstNameInput, lastNameInput} = this.state
    event.preventDefault()
    if (firstNameInput === '' && lastNameInput === '') {
      this.setState({errorMsg: true, errorMsg1: true})
    } else if (firstNameInput === '') {
      this.setState({errorMsg: true})
    } else if (lastNameInput === '') {
      this.setState({errorMsg1: true})
    } else {
      this.setState({registrationProcess: true})
    }
  }

  FirstNameInput = event => {
    this.setState({firstNameInput: event.target.value})
  }

  LastNameInput = event => {
    this.setState({lastNameInput: event.target.value})
  }

  eventHandler = () => {
    const {firstNameInput} = this.state

    if (firstNameInput === '') {
      this.setState({errorMsg: true})
    } else {
      this.setState({errorMsg: false})
    }
  }

  eventHandler1 = () => {
    const {lastNameInput} = this.state

    if (lastNameInput === '') {
      this.setState({errorMsg1: true})
    } else {
      this.setState({errorMsg1: false})
    }
  }

  AnotherResponse = () => {
    this.setState({registrationProcess: false})
  }

  render() {
    const {
      errorMsg,
      errorMsg1,
      firstNameInput,
      lastNameInput,
      registrationProcess,
    } = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        {registrationProcess ? (
          <div className="response-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
              alt="success"
              className="image"
            />
            <p className="success-para">Submitted Successfully</p>
            <button
              type="button"
              onClick={this.AnotherResponse}
              className="AnotherResponse-btn"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitRegistration}>
            <div className="sub-container">
              <label htmlFor="firstName" className="labelEl">
                FIRST NAME
              </label>
              <input
                type="text"
                onBlur={this.eventHandler}
                placeholder="First name"
                id="firstName"
                value={firstNameInput}
                className="inputEl"
                onChange={this.FirstNameInput}
              />
              {errorMsg ? <p className="para">Required</p> : null}
            </div>
            <div className="sub-container">
              <label htmlFor="lastName" className="labelEl">
                LAST NAME
              </label>
              <input
                type="text"
                onBlur={this.eventHandler1}
                value={lastNameInput}
                placeholder="Last name"
                id="lastName"
                className="inputEl"
                onChange={this.LastNameInput}
              />
              {errorMsg1 ? <p className="para">Required</p> : null}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}
export default RegistrationForm
