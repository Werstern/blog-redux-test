import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import PostsList from '../../components/postsList/PostsList';


class Dashboard extends Component {
  componentDidMount () {
    this.props.onInitPosts();
  }

  render() {
    return (
      <div className="dashboard container">
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitPosts: () => dispatch(actions.fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
