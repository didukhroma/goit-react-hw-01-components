import React from "react";
import Container from './components/Container/';
import Profile from './components/Profile/';
import ProfileData from './JSON/user.json';

const App = () =>{
  return (
    <Container>
      <Profile data={ProfileData}/>
    </Container>
  );
}

export default App;
