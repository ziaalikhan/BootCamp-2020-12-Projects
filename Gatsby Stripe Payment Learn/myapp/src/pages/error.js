import React from "react";
import  {Link}  from "gatsby";


export default function error() {
  return (
    <div>
      <h3>There is some Error!!!</h3>
      <Link to="/products">
        Back To Home
      </Link>
    </div>
  );
}
