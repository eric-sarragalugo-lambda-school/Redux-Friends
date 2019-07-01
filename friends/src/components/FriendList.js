import React from 'react';
import styled from 'styled-components';
import FriendCard from './FriendCard';

const FriendList = styled.section`
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
`;

const FriendList_ = (props) => (
  <FriendList>
    {props.list.map((friend) => (
      <FriendCard key={friend.id} friend={friend} />
    ))}
  </FriendList>
);

export default FriendList_;
