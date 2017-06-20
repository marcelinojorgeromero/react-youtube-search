import React from 'react';


const VideoListItem = ({ video, onVideoSelect }) => {
    //https://www.youtube.com/watch?v=
    
    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item hand-cursor">
            <div className="media">
                <div className="media-left media-middle">
                    <img 
                        src={ video.snippet.thumbnails.default.url }
                        alt={ video.snippet.title }
                        className="media-object img-rounded" 
                    />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">
                        { video.snippet.title }
                    </h4>
                    <small>{ video.snippet.description }</small>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;