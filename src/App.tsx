import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import TabsContainer from './Components/TabContainer';

function App() {
  return (
    <div className="App">
      <Banner username='John Poost'/>
      <TabsContainer />
    </div>
  );
}

export default App;
