import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faUserAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// import PostsPage from './components/PostsContainer/PostsPage';
import LoginPage from './views/LoginPage';
// import withAuthenticate from './components/Authentication/withAuthenticate';

library.add(
  faAt,
  faUserAlt,
  faClock,
  // more icons can go here as needed
);

// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <LoginPage />
    </AppContainer>
  );
}

export default App;
