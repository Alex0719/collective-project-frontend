import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import getPostsForInternshipSaga from 'sagas/postsSagas';
import {selectPostsForInternship} from '../../../selectors/postsSelector'

import { getPostsForInternship } from 'actions/getPostsActions';
import Post from '../../../components/elements/Post'
import AddPost from '../../../components/elements/AddPost'
export class InternshipPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("in container willmount");
    this.props.getPosts();
  }

  saveFunction(post)
  {
    console.log("I will save this post ", post);
  }
  render() {
    const {posts} = this.props;
    if(!posts) {
      return null;
    }
    return (
        <div>
          <AddPost saveFunction={this.saveFunction}/>
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
  getPosts: () => dispatch(getPostsForInternship())
});

  InternshipPosts.propTypes = {
    getPosts: PropTypes.func,
    posts: PropTypes.array,
  };
  
  const withSaga = injectSaga({
    key: 'getPostsForInternshipSaga',
    saga: getPostsForInternshipSaga,
  });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(InternshipPosts);
