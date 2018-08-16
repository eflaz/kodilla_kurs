import React from 'react';

const onSubmit = addComment => event => {
    event.preventDefault();
    addComment(event.target['newCommentText'].value);
    event.target['newCommentText'].value = '';
}

const NewCommentForm = ({addComment}) =>
    <div>
        <form onSubmit={onSubmit(addComment)}>
            <input type="text" name="newCommentText" />
        </form>
    </div>

 export default NewCommentForm;