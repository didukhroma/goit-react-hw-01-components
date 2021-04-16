import React from "react";
import Container from './components/Container';
//-------------------------------------------------
import Profile from './components/Profile';
import profileData from './JSON/user.json';
//-------------------------------------------------
import Statistics from './components/Statistics'
import statisticalData from './JSON/statistical-data.json';
//-------------------------------------------------
import FriendList from './components/FriendList';
import friends from './JSON/friends.json'
//-------------------------------------------------

const App = () =>{
  return (
    <Container>
      {/* CSS MODULE */}
      <Profile data={profileData} />
      {/* JSS Styled Component */}
      <Statistics title="Upload stats" stats={statisticalData} /> 
      <Statistics stats={statisticalData} />
      <FriendList friends={friends}/>
    </Container>
  );
}

export default App;
