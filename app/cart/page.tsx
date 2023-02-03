import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import fetcher from "@/services/fetch";
import React from "react";

export default async function page() {
  const cartItems = await fetcher("/api/cart");

  let prices = {
    products: 0,
    delivery: 0,
    total: 0,
  };

  for (let index = 0; index < cartItems.length; index++) {
    cartItems.map((cartItem: any) => (prices.products += cartItem.price));
    prices.delivery += 5;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 pb-5 border-b border-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3"></th>
              <th scope="col" className="px-4 py-3">
                Title
              </th>
              <th scope="col" className="px-4 py-3">
                Color
              </th>
              <th scope="col" className="px-4 py-3">
                Size
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Q.
              </th>
              <th scope="col" className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem: any) => (
              <CartItem
                key={cartItem.title}
                image={cartItem.image}
                title={cartItem.title}
                price={cartItem.price}
                colors={cartItem.colors}
                size={cartItem.size}
                quantity={cartItem.quantity}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-2 mt-3 flex flex-col w-11/12 mx-auto">
        <div className="flex justify-between">
          Products: <span>${prices.products}</span>
        </div>
        <div className="flex justify-between">
          Delivery: <span>${prices.delivery}</span>
        </div>
        <div className="flex justify-between">
          Total: <span>${prices.products + prices.delivery}</span>
        </div>
        <Button data="Checkout" />
      </div>
    </div>
  );
}
