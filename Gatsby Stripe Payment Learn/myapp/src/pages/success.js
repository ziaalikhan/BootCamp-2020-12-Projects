import React from "react";
import  {Link}  from "gatsby";

export default function success() {
  return (
    <div>
      <h3>Success!!!!</h3>
      <Link to="/products">
        Back To Home
      </Link>
    </div>
  );
}