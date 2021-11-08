
import axios from "axios";
import React, { useEffect, } from "react";
//import CreateUser from "./CreateUser";
import ViewPost from "./ViewPost";

export default function User() {
  const [post, setPost] = React.useState([]);

    useEffect(() => {
      axios.get("http://localhost:3004/users").then((response) => {
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
            <h5 className ="text-danger">ID</h5>
              {post.map(post =>(
                <li key={post.id}>{post.id}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">Name</h5>
              {post.map(post =>(
                <li key={post.id}>{post.name}</li>
        ))}
         </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">UserName</h5>
              {post.map(post =>(
                <li key={post.id}>{post.username}</li>
        ))}
          </ul>
        </div>
        <div>
          <ul>
            <h5 className ="text-danger">Email</h5>
              {post.map(post =>(
                <li key={post.id}>{post.email}</li>
        ))}
          </ul>
         </div>
         <div>
           <ViewPost/>
           {/* <CreateUser/> */}
         </div>
     </div>
    </>
  );
}
