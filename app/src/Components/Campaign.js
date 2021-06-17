// Component representing a single campaign data object
// Encapsulating all MediaComponents
import React from 'react'
import CampaignHeader from './MediaComponents/CampaignHeader';
import MediaControl from './MediaComponents/MediaScroll/MediaControl';
import MediaScroller from './MediaComponents/MediaScroll/MediaScroller';

const Campaign = () => {
    return (
        <div>
            <CampaignHeader />
            <MediaScroller />
            <MediaControl />
        </div>
    );
};


export default Campaign;