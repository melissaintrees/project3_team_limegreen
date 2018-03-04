import React, { Component } from 'react';
import "./VideoComp.css";
import ReactPlayer from 'react-player'

const VideoComp = props => (
    <ReactPlayer url={props.video_url} playing />
);

export default VideoComp;