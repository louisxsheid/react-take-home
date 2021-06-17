import React, { useEffect, useState } from 'react';
import './App.css';
import Campaign from './Components/Campaign';
// 


function App() {
  const [campaignsLength, setCampaignsLength] = useState(0);
  const [campaignArray, setCampaignArray] = useState([]);
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
    .then(res => res.json())
    .then(obj => {
      setCampaignsLength(obj.campaigns.length);
      console.log("OBJ", obj)
    });
  }, []);

  useEffect(() => {
    const compArray = [];    
    for(let i = 0; i < campaignsLength; i++) {
      compArray.push(<Campaign key={i} />)
    }
    setCampaignArray(compArray);
  }, [campaignsLength]);

  return (
    <div className="App">
      <header className="App-header">
       PLUGS 
      {campaignArray}       
      </header>
    </div>
  );
}

export default App;
