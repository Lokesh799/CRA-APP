import React from 'react';   
import { Route, Link,  } from 'react-router-dom'; 
import User from './User';  
import Todo from './Todo';
import Post from './Post'; 
import Comment from './Comment';
import CreateUser from './CreateUser';
import ViewPost from './ViewPost';

const App=()=>{
  return(
    <>
<div>  
      <h1 className="text-success">HOME PAGE</h1>  
      <ul className="list-group">  
        <li className="list-group-item list-group-item-primary">  
          <Link to="/User">User</Link>  
        </li>   
        <li className= "list-group-item list-group-item-secondary">  
          <Link to="/Todo">Todo</Link>  
        </li>  
        <li className="list-group-item list-group-item-success">  
          <Link to="/Post">Post</Link>  
        </li>  
      </ul>  
        <li className="list-group-item list-group-item-success">  
          <Link to="/Comment">Comment</Link>  
        </li>
        
        <li className="list-group-item list-group-item-success">  
          <Link className ="btn btn-outline-light mr-2" to="/CreateUser">CreateUser</Link>  
        </li>
      <Route exact path="/User" component={User} />  
      <Route path="/Todo" component={Todo} />  
      <Route path="/Post" component={Post} /> 
      <Route path="/Comment" component={Comment} /> 
      <Route path="/CreateUser" component={CreateUser} />
      <Route path="/viewPost/:userId" component={ViewPost} />  
    </div>
    </>
  )
}
export default App
