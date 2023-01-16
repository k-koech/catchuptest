import React from 'react'

function Post({post, handleDelete}) {
    function onDelete()
    {
     handleDelete(post.id)
    }

    function handleUpdatePost(updatedPost) 
    {
      // const updatedPosts = posts.filter((post) => post.id === updatedPost.id);
      // setPosts(updatedPosts);
      console.log("UPDATED POSTS")
    }
  return (
    <div className='my-5'>
        <h4>{post.title}</h4>
        <h4>{post.description}</h4>
        <button onClick={onDelete} className="btn btn-danger btn-sm">Delete</button>
    </div>
  )
}

export default Post