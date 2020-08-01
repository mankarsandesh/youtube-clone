import React from 'react';
import  './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="RecommendedVideos">
          <h2>Recommended</h2>
          <div className="recommendedVideos__video">
            <VideoCard 
            title="My Name is sandesh"
            views="2.3m views"
            timestamp="3 days ago"
            channelImage="https://i.ytimg.com/an_webp/1_IYL9ZMR_Y/mqdefault_6s.webp?du=3000&sqp=CPSAlfkF&rs=AOn4CLC-9l2Mjh_3SjaGhM2F7v_ihOy3cQ"
            channel="Sandesh Mankar"
            image="https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg"
            />
            <VideoCard 
            title="My Name is sandesh"
            views="2.3m views"
            timestamp="3 days ago"
            channelImage="https://i.ytimg.com/an_webp/1_IYL9ZMR_Y/mqdefault_6s.webp?du=3000&sqp=CPSAlfkF&rs=AOn4CLC-9l2Mjh_3SjaGhM2F7v_ihOy3cQ"
            channel="Sandesh Mankar"
            image="https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg"
            />
            <VideoCard 
            title="My Name is sandesh"
            views="2.3m views"
            timestamp="3 days ago"
            channelImage="https://i.ytimg.com/an_webp/1_IYL9ZMR_Y/mqdefault_6s.webp?du=3000&sqp=CPSAlfkF&rs=AOn4CLC-9l2Mjh_3SjaGhM2F7v_ihOy3cQ"
            channel="Sandesh Mankar"
            image="https://i.ytimg.com/vi/XzJ1WnFTVds/maxresdefault.jpg"
            />
          </div>
        </div>
    )
}
export default RecommendedVideos