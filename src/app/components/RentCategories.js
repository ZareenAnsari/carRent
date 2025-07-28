'use client';

import Image from 'next/image';

const categories = [
  { title: 'Property For Rent', image: '/assests/property.png' },
  { title: 'Car For Rent', image: '/assests/car.png' },
  { title: 'Furniture For Rent', image: '/assests/furniture.png' },
  { title: 'Motorbike For Rent', image: '/assests/bike.png' },
  { title: 'Tools For Rent', image: '/assests/tools.png' },
  { title: 'Electronics For Rent', image: '/assests/electronics.png' },
];

export default function RentCategories() {
  return (
    <section className="px-2 sm:px-6 py-4 mb-2">

      <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
        {categories.map((item, index) => (
          <div
            key={index}
            className="min-w-[180px] sm:min-w-[220px] md:min-w-[250px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={50}
              className="object-contain"
            />
            <p className="mt-4 text-center font-semibold text-sm sm:text-base">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
