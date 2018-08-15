import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments
            ]
        case EDIT_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id !== action.id) {
                    return comment;
                } else {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
            });

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id)

        case THUMB_UP_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id !== action.id) {
                    return comment;
                } else {
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    }
                }
            });

        case THUMB_DOWN_COMMENT:
            return state.comments.map((comment) => {
                if (comment.id !== action.id) {
                    return comment;
                } else {
                    return {
                        ...comment,
                        votes: comment.votes - 1
                    }
                }
            });

        default:
            return state;

    }
}

export default comments;
