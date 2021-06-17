// Component representing a single campaign data object
// Encapsulating all MediaComponents
import React from "react";
import CampaignHeader from "./MediaComponents/CampaignHeader";
import MediaScroller from "./MediaComponents/MediaScroll/MediaScroller";

const Campaign = ({ campaignData }) => {
  return (
    <div>
      <CampaignHeader
        iconUrl={campaignData.campaign_icon_url}
        name={campaignData.campaign_name}
        payPerInstall={campaignData.pay_per_install}
      />
      <MediaScroller medias={campaignData.medias} />
    </div>
  );
};

export default Campaign;
