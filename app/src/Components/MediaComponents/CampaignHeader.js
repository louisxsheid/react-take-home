// Component holding the campaign's icon, name, and campaign data (pay_per_install)
import React from "react";

const CampaignHeader = ({ iconUrl, name, payPerInstall }) => {
  return (
    <div className="header-wrapper">
      <img className="icon" src={iconUrl} alt="icon" />
      <div className="header-body">
        <div className="header-name">{name}</div>
        <div className="header-pay">
          <div style={{ fontWeight: "bold", paddingRight: "5px" }}>
            {payPerInstall}{" "}
          </div>
          per install
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
