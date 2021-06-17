// Component containing the preview of the media object and it's media_type
import React from "react";
import MediaControl from "./MediaControl";

const MediaObject = ({ coverPhotoUrl, trackingLink, downloadUrl }) => {
  return (
    <div>
      <img className="picture" src={coverPhotoUrl} alt="cover" />
      <MediaControl trackingLink={trackingLink} downloadUrl={downloadUrl} />
    </div>
  );
};

export default MediaObject;
