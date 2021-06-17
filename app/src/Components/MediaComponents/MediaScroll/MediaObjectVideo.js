// Component containing the preview of the media object and it's media_type
import React from 'react'

const MediaObjectVideo = ({ coverPhotoUrl }) => {
    return (
        <div className="video" style={{backgroundImage: `url(${coverPhotoUrl})`, backgroundSize: "contain"}} >
            <div className="cover-photo">
                <img 
                    alt="play-button" 
                    src={require("../../../Assets/play@3x.png")} 
                    className="play-button"    
                />
            </div>
        </div>
    )

};


export default MediaObjectVideo;