import Student from "./Student";
import { useEffect, useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";


function HomePage({user, students})
{

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
         fetch("http://localhost:5000/posts")
         .then(r => r.json())
         .then(response => {
            console.log(response)
            setPosts(response)
          })
    }, [])

    function handleDeleteClick(id) {
        console.log("From Lists ",id)

        fetch(`http://localhost:5000/posts/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {

            const updatedPosts = posts.filter((post) => post.id !== id);
            setPosts(updatedPosts)
          });
        }
        const handleAddPost = (newpost) =>
        {
                let updatedPosts = [...posts, newpost]
                setPosts(updatedPosts)
        }



    return (
        <div className="container">
             <div className="row">
                <div className="col ">
                    <h5>Data from DB Json</h5>
                    {
                        posts.map((post)=>                          
                            <Post key={post.id} handleDelete={handleDeleteClick} post={post}/>
                        )
                    }
                </div>

                <div className="col bg-light">

                <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Role</th>
                </tr>
                </thead>
                <tbody>
                 
                    {
                        students.map((student)=> (
                            <Student singleStudent={student} />
                        )
                        )
                    }
                               
                </tbody>
                </table>

                    {/* {
                        students.map((student)=> (
                            <Student singleStudent={student} />
                        )
                        )
                    } */}



                </div>
                
             </div>

             <AddPost onAddPost={handleAddPost} />
        </div>
    )
}

export default HomePage;