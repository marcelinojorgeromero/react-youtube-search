import React from 'react';


const VideoListItem = ({ video }) => {
    //https://www.youtube.com/watch?v=
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/T7jC3LDlLi8" frameborder="0" allowfullscreen></iframe>
    return (
        <li>
            <h3>{ video.snippet.title }</h3>
            <img 
                src={video.snippet.thumbnails.default.url}
                height={ video.snippet.thumbnails.default.height }
                width={ video.snippet.thumbnails.default.width } />
        </li>
    );
};

export default VideoListItem;