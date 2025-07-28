'use client';
import Image from 'next/image';
import listings from '../data/listings';

const CategorySection = () => {
  return (
    <div className="space-y-12">
      {Object.entries(listings).map(([category, items]) => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-xl shadow-md p-4 flex-shrink-0"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={250}
                    height={150}
                    className="object-cover rounded-lg"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p>Rs {item.price}/day</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-sm text-gray-600">{item.distance}</p>
                <p className="text-xs text-gray-500">Deposit: {item.deposit}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategorySection;
