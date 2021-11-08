import axios from "axios";
import React, { useEffect, } from "react";
import ViewComment from "./ViewComment";

export default function Todo() {
  const [post, setPost] = React.useState([]);

    useEffect(() => {
      axios.get("http://localhost:3004/posts").then((response) => {
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
            <h5 className ="text-danger">UserID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.userId}</li>
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
            <h5 className ="text-danger">Title</h5>
              {post.map(post =>(
                <li key={post.id}>{post.title}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">body</h5>
              {post.map(post =>(
                <li key={post.id}>{post.body}</li>
        ))}
         </ul>
        </div>
        <div>
          <ViewComment/>
        </div>
     </div>
    </>
  );
}