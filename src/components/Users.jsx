import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveusers = searchParams.get("filter") == "active";
  return (
    <>
      <nav>
        <Link to={"1"}>User 1</Link>
        <Link to={"2"}>User 2</Link>
        <Link to={"3"}>User 3</Link>
        <Link to={"admin"}>admin</Link>
        <Outlet />
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams({})}>Resert Filter</button>
        </div>
      </nav>
      {showActiveusers ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </>
  );
}

export default Users;
