import axios from "axios";
import React, { useEffect, } from "react";

export default function Comment() {
  const [post, setPost] = React.useState([]);

    useEffect(() => {
      axios.get("http://localhost:3004/comments").then((response) => {
        console.log(response)
        setPost(response.data);
    });
  }, []);

  if (!post) return null;

    return (
      <>
      <div className ="d-flex flex-row bd-highlight mb-3">
        <div>
          <ul>
            <h5 className ="text-danger">psotID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.postId}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">ID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.id}</li>
        ))}
         </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">name</h5>
              {post.map(post =>(
                <li key={post.id}>{post.name}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">email</h5>
              {post.map(post =>(
                <li key={post.id}>{post.email}</li>
        ))}
         </ul>
        </div>
     </div>
    </>
  );
}