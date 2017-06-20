import React from 'react';


const VideoListItem = ({ video }) => {
    //https://www.youtube.com/watch?v=
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/T7jC3LDlLi8" frameborder="0" allowfullscreen></iframe>
    return (
        <li className="list-group-item">
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