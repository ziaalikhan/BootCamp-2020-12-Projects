import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { loadStripe } from "@stripe/stripe-js";

export default function Products() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStripePrice {
        nodes {
          product {
            name
            description
            id
            images
          }
          id
        }
      }
    }
  `);

  console.log(data);

  const redirectToCheckout = async (event, pID) => {
    event.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51Ial1LKHxF4h51MvhbqhdkbLb59lYqHVjlXJ02LWN4392TZgOrLJXmKQtBvWHUgqTB21WfvDu9JjBWBr3r0OMFeq00qt9Kteio"
    );
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: pID, quantity: 1 }],
      successUrl: `http://localhost:8000/success`,
      cancelUrl: `http://localhost:8000/error`,
    });
    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <div>
      <h3>Products</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.allStripePrice.nodes.map((val, id) => {
          return (
            <div key={id}>
              <h3>Name : {val.product.name}</h3>
              <h4>Description : {val.product.description}</h4>
              <img
                src={val.product.images}
                alt=""
                width="300px"
                height="200px"
              />
              <br />
              <button
                style={{ textAlign: "center" }}
                onClick={(e) => redirectToCheckout(e, val.id)}
              >
                {val.product.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
