import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return <div>Details about User {userId}</div>;
}

export default UserDetails;
