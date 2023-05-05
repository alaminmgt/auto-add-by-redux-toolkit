import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'




const DisplayUser = () => {
    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })
    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }
  return (
    <>
        <div>
           {data.map((user,id)=>{
                return <li key={id} className='show-data'>
                     {user}
                     <i class="fa-regular fa-trash-can delete" onClick={()=>deleteUser(id)}></i>  
                     <hr/>   
                </li>
           })}
      </div>
    </>
  )
}

export default DisplayUser
