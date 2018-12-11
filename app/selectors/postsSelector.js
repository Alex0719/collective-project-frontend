import { createSelector } from 'reselect';

export const selectPosts = state => state.getIn(['postsReducer','posts']).toJS();

export const selectPostsForInternship = () => createSelector(() => selectPosts);
