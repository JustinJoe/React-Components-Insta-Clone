import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  const renderedPosts = posts.map(post => <Post 
    key={post.id} 
    post={post}
    likePost={likePost}
  />)

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* {posts.map(post => <Post key={post.id} post={post} likePost={likePost} />)} */}
      {renderedPosts}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
