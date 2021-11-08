import axios from "axios";
import React, { useState } from "react";

export default function CreateUser ()   {
    const url=""
    const[data ,setData] =useState({
      id:"",
      username:"",
      email:""

    })
     function submit(e) {
       e.prevenDefault();
       axios.post(url,{
        id: data.id,
        username: data.username,
        email:data.email,
       })
       .then(res=>{
         console.log(res.data)
       })
     }

    function handle(e) {
      const newData={...data}
       newData[e.target.id]=e.target.value
       setData(newData)
       console.log(newData);
    }
    
  
    return (
      <div className="wrapper">
        <form onSubmit={(e)=>submit(e)}>
          <div className="form-group">
            <label>Enter ID</label>
              <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" className="form-control" />
              </div>
                  <div className="form-group">
                    <label>username</label>
                    <input onChange={(e)=>handle(e)} id="id" value={data.username}  type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Enter Email</label>
                    <input onChange={(e)=>handle(e)} id="id" value={data.username} type="text" className="form-control" />
                  </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-success btn-block" />
                </div>
        </form>
      </div>
    )
    }
