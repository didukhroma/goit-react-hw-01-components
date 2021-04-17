import React from "react";
import Container from './components/Container';
//---------------------------------------------------------
import Profile from './components/Profile';
import profileData from './JSON/user.json';
//---------------------------------------------------------
import Statistics from './components/Statistics'
import statisticalData from './JSON/statistical-data.json';
//---------------------------------------------------------
import FriendList from './components/FriendList';
import friends from './JSON/friends.json';
//---------------------------------------------------------
import TransactionHistory from './components/Transactions';
import transactions from './JSON/transactions.json';
//---------------------------------------------------------


const App = () =>{
  return (
    <Container>
      {/* CSS MODULE */}
      <Profile data={profileData} />
      {/*  CSS MODULE + STYLED COMPONENTS */}
      <Statistics title="Upload stats" stats={statisticalData} /> 
      <Statistics stats={statisticalData} />
      {/* SASS MODULE  */}
      <FriendList friends={friends} />
      {/* SASS MODULE */}
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
