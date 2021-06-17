// Component containing the logic for downloading and copying the link and media itself respectively
import React from 'react'

const MediaControl = ({trackingLink, downloadUrl}) => {
    return (
        <div className="control-wrapper">
            <div className="control-box" onClick={() => {
                navigator.clipboard.writeText(trackingLink);
            }}>
                <img className="control-icon" src={require("../../../Assets/link.png")} alt="link"/>
            </div>
            <div className="control-box">
               <a href={downloadUrl} download> <img className="control-icon" src={require("../../../Assets/download.png")} alt="dl"/> </a>
            </div>
        </div>
    )

};


export default MediaControl;