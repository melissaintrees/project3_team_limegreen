import React from 'react';
import "./VideoComp.css";
import ReactPlayer from 'react-player'

const VideoComp = props => (
    <div>
        <div className="embed-responsive embed-responsive-4by3 video-styles">
            <ReactPlayer url={props.video_url} playing />
        </div>
    </div>

);

export default VideoComp;