import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

// Define props for the ProductCard component
interface ProductCardProps {
  imageSrc: string;
}

export default function OurProduct() {
  const products: string[] = [
    '/cate2.png',
    '/cate5.png',
    '/cate1.png',
    '/cate4.png',
    '/cate6.png',
    '/cate3.png',
    '/cate7.png',
    '/cate2.png',
  ];

  return (
    <section className="mt-28 px-4 sm:px-8 md:px-52 py-8">
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Our Product</h1>
      </header>

      <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {products.map((imageSrc, index) => (
          <ProductCard key={index} imageSrc={imageSrc} />
        ))}
      </div>
    </section>
  );
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt="Sofa"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <h2 className="text-lg font-medium">Library Stone Chair</h2>
          <p className="text-lg font-bold text-black">$20</p>
        </div>
        <FaCartShopping className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
  );
};
