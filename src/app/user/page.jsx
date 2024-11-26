"use client"

import { useRouter , useParams} from "next/navigation";

import React, { useState } from 'react'
const page = () => {
  const [data,setData]=useState({
    name:'',
    age:'',
    file:null
  })
  
async function handleSubmit(e){
  e.preventDefault();
  const formData=new FormData();
  formData.append('name',data.name);
  formData.append('age',data.age);
  if(data.file){
    formData.append('file',data.file);
  }

  const res=await fetch('http://localhost:3000/api/',{
    method:'POST',
    headers:{
      'Content-Type':'multipart/form-data'
    },
    body:JSON.stringify(data)
  })
console.log(formData)

}
return (
  <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          name="file"
          onChange={(e) =>
            setData({ ...data, file: e.target.files[0] }) // Handling a single file
          }
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </>
);
};

export default page;