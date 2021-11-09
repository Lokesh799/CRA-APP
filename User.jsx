
import axios from "axios";
import React, { useEffect, } from "react";
import ViewPost from "./ViewPost";

export default function User() {
  const [post, setPost] = React.useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/users").then((response) => {
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
          <div>
            <h5 className ="text-danger">UserName</h5>
              {post.map(post =>(
                <li key={post.id}>{post.username}<button className="btn btn-primary" onClick>View post</button>
                <button className="btn btn-primary mr-2" to="/ViewPost/${userId}">View Todo</button>
                <button className="btn btn-primary mr-2" onClick>View Comment</button>
                <button className="btn btn-primary mr-2" onClick> Edit</button>
                </li>
                
        ))}
        </div>
          </ul>
        </div>
     </div>
    </>
  );
}
