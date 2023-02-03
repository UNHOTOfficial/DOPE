import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import fetcher from "@/services/fetch";
import React from "react";

export default async function page() {
  const cartItems = await fetcher("/api/cart");

  let prices = {
    products: 0,
    delivery: 10,
    total: 0,
  };

  for (let index = 0; index < cartItems.length; index++) {
    cartItems.map((cartItem: any) => (prices.products += cartItem.price));
  }

  return (
    <div>
      <div className="flex flex-col">
        {cartItems.map((cartItem: any) => (
          <CartItem
            key={cartItem.title}
            image={cartItem.image}
            title={cartItem.title}
            price={cartItem.price}
            colors={cartItem.colors}
          />
        ))}
      </div>
      <div className="border-t py-2 mt-3 border-slate-50 flex flex-col">
        <span>Products: ${prices.products}</span>
        <span>Delivery: ${prices.delivery}</span>
        <span>Total: ${prices.products + prices.delivery}</span>
        <Button data="Checkout" />
      </div>
    </div>
  );
}
