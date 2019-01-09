import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import getPostsForInternshipSaga from 'sagas/postsSagas';
import {selectPostsForInternship} from '../../../selectors/postsSelector'
import { getPostsForInternship } from 'actions/getPostsActions';
import {addPostForInternshipSaga} from 'sagas/postsSagas';
import {addPostForInternshipRequest} from 'actions/addPostActions';
import Post from '../../../components/elements/Post'
import AddPost from '../../../components/elements/AddPost'
import { loadavg } from 'os';
export class InternshipPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  saveFunction=(post)=>
  {
    this.props.savePost(post);
  }
  render() {
    const {posts} = this.props;
    if(!posts) {
      return null;
    }
    else if(posts.length>=2)
    {
      posts.sort(function(a,b){
      if (new Date(a.date) > new Date(b.date)) return -1;
      if (new Date(a.date) < new Date(b.date)) return 1;
      return 0});
    }

    return (
        <div>
          {posts!=null && posts.length>0 && posts[0].last?null: <AddPost saveFunction={post=>this.saveFunction(post)}/>}
          {posts.map((post, key)=><Post key={key} post={post}/>)}
        </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    posts: selectPostsForInternship(state)(),
  });


const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsForInternship()),
  savePost: (post) =>dispatch(addPostForInternshipRequest(post))
});

  InternshipPosts.propTypes = {
    getPosts: PropTypes.func,
    posts: PropTypes.array,
    savePost:PropTypes.func,
  };

  const withSaga = injectSaga({
    key: 'getPostsForInternshipSaga',
    saga: getPostsForInternshipSaga,
  });

  const withSagaSavePost = injectSaga({
    key: 'addPostForInternshipSaga',
    saga: addPostForInternshipSaga,
  });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withSagaSavePost,
  withConnect,
)(InternshipPosts);
