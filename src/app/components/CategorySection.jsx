
'use client';
import Image from 'next/image';
import listings from '../data/listings';

const CategorySection = () => {
  return (
    <div className="space-y-2">
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
                    width={300}
                    height={150}
                    className="object-cover rounded-lg"
                  />
            
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {item.badge}
                  </span>
         
                  <span className="absolute bottom-2 left-2 bg-gray-300 text-black px-2 py-1 rounded text-xs">
                    Deposit: {item.deposit}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-800">Rs {item.price}/day</p>
                </div>

<span className="inline-flex items-center justify-between w-full text-sm text-black-600 py-1 mt-2">
  <span className="flex items-center gap-1">
     {item.location}
  </span>
  <span className="text-xs text-gray-500">{item.distance}</span>
</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CategorySection;
