import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "gatsby";

export default function HomeIndex() {
  const redirectToCheckout = async (event) => {
    event.preventDefault();

    const stripe = await loadStripe(
      "pk_test_51Ial1LKHxF4h51MvhbqhdkbLb59lYqHVjlXJ02LWN4392TZgOrLJXmKQtBvWHUgqTB21WfvDu9JjBWBr3r0OMFeq00qt9Kteio"
    );
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1JoYagKHxF4h51MveaiNkQ36", quantity: 1 }],
      successUrl: `http://localhost:8000/success`,
      cancelUrl: `http://localhost:8000/error`,
    });
    if (error) {
      console.warn("Error:", error);
    }
  };

  return (
    <div>
      <h3>Hello World</h3>
      <button onClick={redirectToCheckout}>Shoes</button>
      <br />
      <Link to="/products">Go To Products Page</Link>
    </div>
  );
}
