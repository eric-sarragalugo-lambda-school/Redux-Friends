import React from 'react';
import styled from 'styled-components';

const FriendCard = styled.section`
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
  font-size: 1.4rem;
  padding: 1rem;
  margin: 1rem;

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19), 0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
  }
`;

const FriendCard_ = (props) => {
  return (
    <FriendCard>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </FriendCard>
  );
};

export default FriendCard_;
