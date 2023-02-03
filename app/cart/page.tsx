import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import fetcher from "@/services/fetch";
import React from "react";

export default async function page() {
  const cartItems = [
    {
      id: 1,
      photo: "https://i.imgur.com/vudDqr9.png",
      title: "Chelsea Boots",
      price: 399,
      rate: 4.7,
      count: 3786,
      isFresh: true,
      isBestSelling: false,
      colors: ["#D27C3F"],
      overview:
        "The secret to spotting the perfect Chelsea boots is to look for those that are timeless, crafted from a hardy, long-lasting material and have a unique detail. Ticking all the right boxes, Proenza Schouler's pair has been made in Italy from black leather and detailed with contrasting white stitching. They're equipped with elasticated panels at the sides for comfort, plus handy pull tabs at the back.",
    },
  ]

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
