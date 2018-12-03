import { createSelector } from 'reselect';

export const selectPosts = state => state.getIn(['postsReducer','posts']);

export const selectPostsForInternship = () => createSelector(() => selectPosts);
