import React from "react";
import Button from "react-bootstrap/Button";
import { deleteAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {

  const dispatch = useDispatch();

  const remoeAllUser=(payload)=>{
    dispatch(deleteAllUsers(payload))
  }
  return (
    <>
      <div class="row justify-content-end">
        <div class="col-4">
          <Button className="delete-btn" variant="danger" onClick={()=>remoeAllUser(deleteAllUsers())}>
            Delete all
          </Button></div>
      </div>
    </>
  );
};

export default DeleteAllUser;
