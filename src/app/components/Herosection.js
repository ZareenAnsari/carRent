import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">

        <div className="relative flex justify-center items-center z-10">
          <div className="relative flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
            <Image
              src="/assests/hero.png" 
              alt="Blue Car"
              width={750} 
              height={500} 
              className="relative z-10"
            />
            <Image
              src="/assests/hero1.png" 
              alt="Red Car"
              width={350} 
              height={300} 
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

