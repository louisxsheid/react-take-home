// Component Encapsulating the MediaControl and MediaObject components
// Contains logic for scrollable functionality
import React, { useState, useEffect } from "react";
import MediaObjectVideo from "./MediaObjectVideo";
import MediaObjectPicture from "./MediaObjectPicture";

const MediaScroller = ({ medias }) => {
  const [mediaArray, setMediaArray] = useState([]);
  useEffect(() => {
    const compArray = [];
    for (let i = 0; i < medias.length; i++) {
      if (medias[i].media_type === "video") {
        compArray.push(
          <div className="media-object-wrapper" key={i}>
            <MediaObjectVideo
              key={i}
              coverPhotoUrl={medias[i].cover_photo_url}
              trackingLink={medias[i].tracking_link}
              downloadUrl={medias[i].download_url}
            />
          </div>
        );
      } else {
        compArray.push(
          <div className="media-object-wrapper" key={i}>
            <MediaObjectPicture
              key={i}
              coverPhotoUrl={medias[i].cover_photo_url}
              trackingLink={medias[i].tracking_link}
              downloadUrl={medias[i].download_url}
            />
          </div>
        );
      }
    }
    setMediaArray(compArray);
  }, [medias]);

  return (
    <div>
      <div className="scroller-wrapper">{mediaArray}</div>
    </div>
  );
};

export default MediaScroller;
