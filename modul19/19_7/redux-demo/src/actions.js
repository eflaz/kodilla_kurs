const uuid = require('uuid');

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

// function editComment(id, text) {
//     return {
//         type: EDIT_COMMENT,
//         id,
//         text
//     }
// }

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