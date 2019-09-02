import React from 'react';

import Comment from './Comment';

function Post(props) {
    const { author, date, content, comments } = props.data;

    return (
        <div className='post'>
            <div className='post-author'>
                <img className='avatar' src={author.avatar} />
                <div className='post-author-info'>
                    <span className='post-author-name'>{author.name}</span>
                    <span className='post-date'>{date}</span>
                </div>
            </div>
            <p className='post-content'>{content}</p>
            {comments.map(comment => (
                <Comment key={comment.id} data={comment} />
            ))}
        </div>
    );
}

export default Post;
