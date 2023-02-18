import React, { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { addUser,deletUser } from './redux/features/User.js'

const App = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.user.value);

  const [name,setName]=useState("")
  const [username,setUsername]=useState("")

  return (
    <div className='App'>
      <div className="addUser">
        <input className='aUI' type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' />
        <input className='aUI' type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter your username' />
        <button className='aUB' onClick={()=>{dispatch(addUser(
          {
            id:userList[userList.length -1].id+1,name,username
          }
        ))}} >Add User</button>
      </div>
      <div className="displayUser">
         {
          userList.map((user)=>{
            return <div className="userCard">
              <div className="cardUp">
                <p>{user.name}</p>
                <span>@{user.username}</span>
                <span className='id'>{user.id}</span>
              </div>
              <div className="cardDown">
                <div className="uI">
                <input className='updateInput'placeholder='new name' type="text" />
                <input type="text"placeholder='new username' className='updateInput' />
                </div>
                <button className='updateBtn btnCD' >Update</button>
                <button className='deleteBtn btnCD' onClick={()=>{dispatch(deletUser({id:user.id}))}} >Delet</button>
              </div>
            </div>
          })
        } 
      </div>
    </div>
  )
}

export default App
