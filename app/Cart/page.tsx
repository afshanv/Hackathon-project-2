import React from 'react';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';

const BuyingProduct = () => {
  const products = [
    {
      id: 1,
      name: 'Library Stool Chair',
      description: 'Asthen Slate / Cobait Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/cate1.png',
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      description: 'Asthen Slate / Cobait Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/cate6.png',
    },
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="container mx-auto py-8 px-4 lg:py-12 lg:px-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Products List */}
        <section className="w-full md:w-3/5">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">Bags</h1>
          </header>
          <div className="space-y-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4"
              >
                <div className="flex items-center gap-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg"
                    width={150}
                    height={150}
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-700 text-sm mt-1">{product.description}</p>
                    <div className="text-gray-600 text-sm mt-2">
                      <p>Size: {product.size}</p>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                    <div className="flex gap-4 text-gray-800 mt-4">
                      <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                      <FiTrash className="text-2xl cursor-pointer hover:text-gray-500" />
                    </div>
                  </div>
                </div>
                <span className="font-semibold text-xl mt-4 md:mt-0">${product.price}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <aside className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Summary</h2>
          <ul className="space-y-4">
            <li className="flex justify-between text-lg">
              <span>Sub Total</span>
              <span>${total.toFixed(2)}</span>
            </li>
            <li className="flex justify-between text-lg">
              <span>Estimate Delivery & Handling</span>
              <span>Free</span>
            </li>
            <li className="flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>
          <button className="mt-6 w-full bg-cyan-500 text-white py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition">
            Member Checkout
          </button>
        </aside>
      </div>
    </div>
  );
};

export default BuyingProduct;
