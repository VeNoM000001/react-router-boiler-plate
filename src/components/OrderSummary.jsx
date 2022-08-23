import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Placed</div>
      <button onClick={() => navigate("/")}>go back</button>
    </>
  );
}

export default OrderSummary;
