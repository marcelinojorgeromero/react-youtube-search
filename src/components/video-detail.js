import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>;
    
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/T7jC3LDlLi8" frameborder="0" allowfullscreen></iframe>
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" 
                src={ videoUrl }></iframe>
            </div>
            <div>
                <div>{ video.snippet.title }</div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    );
};

export default VideoDetail;