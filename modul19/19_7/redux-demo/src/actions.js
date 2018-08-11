const uuid = require('uuid');

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';



export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

export { ADD_COMMENT };
export { EDIT_COMMENT };
export { REMOVE_COMMENT };
export { THUMB_UP_COMMENT };
export { THUMB_DOWN_COMMENT };