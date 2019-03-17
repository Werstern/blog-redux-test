import React from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';

import PostSummary from '../postSummary/PostSummary';
import PostContainer from '../postContainer/PostContainer';

const postsList = (props) => {
  return (
    <PostContainer>
      { props.posts && props.posts.map(post => {
        return (
          <Link to={'/posts/' + post.id} key={post.id}>
            <PostSummary >
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </PostSummary>
          </Link>
        )
      })}
    </PostContainer>
  );
}

//const postsList = styled.div`
//  display: flex;

//`


export default postsList;
