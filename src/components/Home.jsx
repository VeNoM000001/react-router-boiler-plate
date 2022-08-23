import React from "react";
import { useNavigate } from "react-router-dom";

function home() {
  const navigate = useNavigate();
  return (
    <>
      <div>home</div>
      <button onClick={() => navigate("OrderSummary")}>Place Order</button>
    </>
  );
}

export default home;
