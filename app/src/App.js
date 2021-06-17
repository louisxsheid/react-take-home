import React, { useEffect, useState } from "react";
import "./App.css";
import Campaign from "./Components/Campaign";

function App() {
  const [campaignData, setCampaignData] = useState([]);
  const [campaignArray, setCampaignArray] = useState([]);
  useEffect(() => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((res) => res.json())
      .then((obj) => {
        setCampaignData(obj.campaigns);
        console.log("OBJ", obj);
      });
  }, []);

  useEffect(() => {
    const compArray = [];
    for (let i = 0; i < campaignData.length; i++) {
      compArray.push(
        <div className="campaign-wrapper" key={i}>
          <Campaign key={i} campaignData={campaignData[i]} />
        </div>
      );
    }
    setCampaignArray(compArray);
  }, [campaignData]);

  return (
    <div className="App">
      <div className="plugs">PLUGS</div>
      {campaignArray}
    </div>
  );
}

export default App;
