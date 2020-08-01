import React from 'react';
import "./VideoCard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function VideoCard({image,title,channel,views,timestamp,channelImage}){
    return(
        <div className="videoCard">
             <img src={image} alt="" className="videoCard__thumbnail" />
             <div className="videoCard__info">
                <AccountCircleIcon className="videoCard__avatar"
                alt={channel}
                src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
             </div>   
        </div>
    )
}

export default VideoCard