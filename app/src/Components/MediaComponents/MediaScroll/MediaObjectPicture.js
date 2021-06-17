// Component containing the preview of the media object and it's media_type
import React from 'react'

const MediaObject = ({ coverPhotoUrl}) => {
    return (
        <div>
            <img className="cover-photo" src={coverPhotoUrl} alt="cover"/>
        </div>
    )

};


export default MediaObject;