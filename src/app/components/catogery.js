'use client';
import Image from 'next/image';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Property for Rent',
      image: '/house 1.png',
    },
    {
      id: 2,
      name: 'Car for Rent',
      image: '/hatchback 2.png',
    },
    {
      id: 3,
      name: 'Furniture for Rent',
      image: '/sofa 1.png',
    },
    {
      id: 4,
      name: 'Motorbike for Rent',
      image: 'public/pngwing.com (1) 1.png',
    },
    // Add more categories as needed
  ];

  return (
    <div className="py-8 px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
      
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex-shrink-0 w-64 h-72 rounded-lg shadow-md overflow-hidden bg-white"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Browse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;