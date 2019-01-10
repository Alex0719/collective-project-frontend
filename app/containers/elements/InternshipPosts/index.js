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
import Alert from 'react-s-alert';

export class InternshipPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  showAlert(message, error)
  {
      if(error)
      {
        Alert.error(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
      else
      {
        Alert.success(message, {
          position: 'top-right',
          effect: 'jelly'
        });
      }
  }

  saveFunction=(post)=>
  {
    this.props.savePost(post, this.showAlert);
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
    const { showAdd = true } = this.props;
    let condition = posts!=null && posts.length>0 && posts[0].last;
    if(!showAdd) {
      condition = true;
    }

    return (
        <div>
          {condition  ? null: <AddPost saveFunction={post=>this.saveFunction(post)}/>}
          {posts.map((post, key)=><Post key={key} post={post}/>)}
        </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    posts: selectPostsForInternship(state)(),
  });


const mapDispatchToProps = (dispatch, {internshipId}) => ({
  getPosts: () => dispatch(getPostsForInternship(internshipId)),
  savePost: (post,fun) =>dispatch(addPostForInternshipRequest(post, fun, internshipId))
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
