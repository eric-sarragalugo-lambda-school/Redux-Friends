import React from 'react';
import styled from 'styled-components';

const FriendForm = styled.form`
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
  margin-bottom: 1rem;
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

class FriendForm_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: '',
      },
    };
  }
  handleUpdate = (event) => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    return (
      <FriendForm>
        <InputField
          type='text'
          name='name'
          placeholder='name'
          value={this.state.newFriend.name}
          onChange={this.handleUpdate}
        />
        <InputField
          type='text'
          name='age'
          placeholder='age'
          value={this.state.newFriend.age}
          onChange={this.handleUpdate}
        />
        <InputField
          type='text'
          name='email'
          placeholder='email address'
          value={this.state.newFriend.email}
          onChange={this.handleUpdate}
        />
        <SubmitButton
          onClick={(event) => {
            this.props.handleSubmit(event, this.state.newFriend);
            this.setState({
              newFriend: {
                name: '',
                age: '',
                email: '',
              },
            });
          }}
        >
          Submit
        </SubmitButton>
      </FriendForm>
    );
  }
}

export default FriendForm_;
