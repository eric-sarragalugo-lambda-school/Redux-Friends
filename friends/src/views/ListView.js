import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchFriends, addFriend } from '../actions';
import { FriendList, FriendForm } from '../components';

const ListView = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  h1 {
    padding: 1rem;
    display: block;
    text-align: center;
    font-size: 2.4rem;
  }
`;
const SignOutButton = styled.button`
  background-color: #263238;
  border: none;
  border-radius: 0.2rem;
  box-shadow: none;
  color: #fafafa;
  font-size: 1.6rem;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    background-color: #37474f;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
  }
`;

class ListView_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      pending: false,
      loggedIn: false,
    };
  }
  componentDidMount() {
    this.props.fetchFriends();
    localStorage.getItem('userToken') && this.setState({ loggedIn: true });
  }
  handleSignOut = (event) => {
    event.preventDefault();
    localStorage.removeItem('userToken');
    this.setState({ loggedIn: false });
  };
  handleSubmit = (event, newFriend) => {
    event.preventDefault();
    this.props.addFriend(newFriend);
  };
  render() {
    if (!this.state.loggedIn) return <Redirect to='/' />;
    return (
      <ListView>
        <h1>FRIEND LIST</h1>
        <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
        <FriendForm handleSubmit={this.handleSubmit} />
        <FriendList list={this.props.friends} />
      </ListView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends,
    pending: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend },
)(ListView_);
