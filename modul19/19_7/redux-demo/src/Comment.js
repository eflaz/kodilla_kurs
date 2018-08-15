import React from 'react';
import './Comment.css';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment }) =>
    <li>
        <div className="CommentContainer">
            <div className="CommentText">
                {text}
            </div>
            <div> 
                <span>votes: {votes}</span>
                <span><button onClick={() => thumbUpComment(id)}> Thumb up</button></span>
                <span><button onClick={() => thumbDownComment(id)}> Thumb down</button></span>
            </div>
            <div>
                <button onClick={() => removeComment(id)}> Remove</button>
            </div> 
        </div>   
    </li>;

export default Comment;