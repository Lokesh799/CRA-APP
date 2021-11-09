import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function CreateUser ()   {
    let history=useHistory();
    const[data ,setData] =useState({
      id:"",
      username:"",
      email:""

    })
     const submit=(e)=> {
       e.prevenDefault();
       axios.get("http://localhost:8000/users",data)
       history.push("/User")
     }
     

    const handle =(e)=> {
      setData({...data,[e.target.name]: e.target.value})
    }
    
  
    return (
      <div className="wrapper">
        <form onSubmit={(e)=>submit(e)}>
          <div className="form-group">
            <label>Enter ID</label>
              <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" name="id" className="form-control" />
              </div>
                  <div className="form-group">
                    <label>username</label>
                    <input onChange={(e)=>handle(e)} id="id" value={data.username}  type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Enter Email</label>
                    <input onChange={(e)=>handle(e)} id="id" value={data.email} type="text" name="email" className="form-control" />
                  </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-success btn-block" />
                </div>
        </form>
      </div>
    )
    }
