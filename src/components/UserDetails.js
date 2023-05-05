import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import Button from "react-bootstrap/Button";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";



const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser=(payload)=>{
    console.log(payload);
    dispatch(addUser(payload))
  }
  return (
    <>
      <div className="content ">
        <div class="user-heading row justify-content-between">
          <div class="col-6"><h4>List of user details</h4></div>
          <div class="col-4">
            <Button className="add-btn" onClick={()=>addNewUser(fakeUserData())}>Add new user</Button>
            </div>
        </div>
        <hr />
        <ul>
          <DisplayUser/>
        </ul>
        <DeleteAllUser />
      </div>
    </>
  );
};

export default UserDetails;
