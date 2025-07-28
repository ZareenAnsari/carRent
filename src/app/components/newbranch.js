
'use client';
import Image from 'next/image';

const features = [
  { icon: '/assests/Ellipse.png', alt: 'Beach chair icon', title: 'Rent & Relax' },
  { icon: '/assests/Ellipse1.png', alt: 'Star icon', title: 'Starter'  },
  { icon: '/assests/Ellipse2.png', alt: 'Wheel icon', title: 'Weekend' },
  { icon: '/assests/Ellipse.png', alt: 'Timer icon', title: 'Flash Rent'},
  { icon: '/assests/Ellipse1.png', alt: 'Coins icon', title: 'Rent More,'},
  { icon: '/assests/Ellipse2.png', alt: 'Sofa icon', title: 'Furnish On A' },
  { icon: '/assests/Ellipse.png', alt: 'Heart icon', title: 'Repeat' },
  { icon: '/assests/Ellipse1.png', alt: 'Moon icon', title: 'Midnight'},
];

const BranchSection = () => {
  return (
    <section className="py-4 bg-white mt-2 ">
      <div className="container mx-auto px-2">
      
        <div className="flex overflow-x-auto hide-scrollbar ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-w-[150px] flex-shrink-0 flex flex-col items-center text-center "
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: feature.backgroundColor || '#ffe08a' }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
            // hello
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
