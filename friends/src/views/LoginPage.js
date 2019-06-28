import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../actions';

const PageWrapper = styled.div`
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const InputField = styled.input`
  width: 100%;
`;
const SubmitButton = styled.button``;

const initialState = {
  credentials: {
    username: '',
    password: '',
  },
};

class LoginPage extends React.Component {
  constructor() {
    super();
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
    let credentials = { ...this.state.credentials };
    this.props.login(credentials);
    this.setState({ ...initialState });
  };
  render() {
    return (
      <PageWrapper>
        <LoginContainer>
          <h1>USER LOGIN</h1>
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
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(
  mapStateToProps,
  { login },
)(LoginPage);
