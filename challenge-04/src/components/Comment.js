import React from 'react';

function Comment(props) {
    const { id, author, content } = props.data;
    return (
        <div key={id} className='comment'>
            <img className='avatar' src={author.avatar} />
            <p>
                <span className='comment-author-name'>{author.name}</span>
                <span className='comment-content'>{content}</span>
            </p>
        </div>
    );
}

export default Comment;
