import Image from 'next/image';
import React from 'react';

export default function GalleryLayout() {
  return (
    <section className="px-4 sm:px-8 md:px-44 mt-12 flex flex-col md:flex-row gap-4">
      {/* Main Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-h-screen">
          <Image
            src="/cate1.png"
            alt="Main Image"
            layout="responsive"
            width={400}
            height={560}
            className="object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Grid Images Section */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {[
          { src: '/cate4.png', alt: 'Image 1' },
          { src: '/cate2.png', alt: 'Image 2' },
          { src: '/cate3.png', alt: 'Image 3' },
          { src: '/cate2.png', alt: 'Image 4' },
        ].map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={200}
              height={280}
              className="object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



