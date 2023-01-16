import { useState } from "react";

export default function AddPost({onAddPost})
{
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [author, setAuthor] = useState("");



    function handlePostSubmit(e)
    {
      e.preventDefault();

      const postData = {title: title, 
        description: desc,
        author: author
      };

      fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(postData),
        })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(newPost)
        console.log(newPost)
      });
  
    }

    return (
        <>
        <form onSubmit={handlePostSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" onChange={(e)=>setAuthor(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Content</label>
                        <textarea className="form-control" onChange={(e)=>setDesc(e.target.value)} rows="5"></textarea>
                    </div>
                  
                    <button type="submit" disabled={!desc} className="btn btn-primary">Save</button>
                </form>
        </>
    )

}