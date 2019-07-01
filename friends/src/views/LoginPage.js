import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../actions';

const LoginPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    display: block;
    text-align: center;
    font-size: 2.4rem;
  }
`;
const LoginContainer = styled.section`
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
`;
const Status = styled.p`
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.pending ? '#B0BEC5' : props.success ? '#1B5E20' : props.failure ? '#b71c1c' : '#fafafa'};
  color: #fafafa;
  font-size: 1.4rem;
  padding: 1rem 0;
  margin: 1rem 0;
  text-align: center;
`;
const InputField = styled.input`
  background-color: #fafafa;
  border: none;
  border-bottom: 0.1rem solid #263238;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
`;
const SubmitButton = styled.button`
  background-color: #263238;
  border: none;
  border-radius: 0.2rem;
  box-shadow: none;
  color: #fafafa;
  font-size: 1.6rem;
  margin-top: 3rem;
  padding: 1rem;
  width: 100%;

  &:hover {
    background-color: #37474f;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
  }
`;

const initialState = {
  credentials: {
    username: '',
    password: '',
  },
  redirectToReferrer: false,
};

class LoginPage_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login({ ...this.state.credentials });
    this.setState({ ...initialState });
  };
  render() {
    if (localStorage.getItem('userToken')) {
      return <Redirect to='/' />;
    }
    return (
      <LoginPage>
        <LoginContainer>
          <h1>USER LOGIN</h1>
          {this.props.pending ? (
            <Status pending>
              <FontAwesomeIcon icon={['fas', 'circle-notch']} spin />
            </Status>
          ) : this.props.success ? (
            <Status success>{this.props.message}</Status>
          ) : this.props.failure ? (
            <Status failure>{this.props.message}</Status>
          ) : (
            <Status />
          )}
          <form>
            <InputField
              type='text'
              name='username'
              placeholder='email-address'
              value={this.state.credentials.username}
              onChange={this.handleInput}
            />
            <InputField
              type='text'
              name='password'
              placeholder='password'
              value={this.state.credentials.password}
              onChange={this.handleInput}
            />
            <SubmitButton onClick={this.handleSubmit}>Login</SubmitButton>
          </form>
        </LoginContainer>
      </LoginPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.friendsReducer.loginMessage,
    pending: state.friendsReducer.pendingLogin,
    success: state.friendsReducer.successfulLogin,
    failure: state.friendsReducer.failedLogin,
  };
};

export default connect(
  mapStateToProps,
  { login },
)(LoginPage_);
