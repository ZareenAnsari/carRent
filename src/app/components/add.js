'use client';
import Head from 'next/head';
import Image from 'next/image';

const CarRental = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Head>
        <title>CRA Rental - Your Rentals On The Go</title>
        <meta name="description" content="Browse, book and manage your rentals from anywhere" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="w-full max-w-[1000px] h-auto flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 md:gap-8 bg-transparent relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Left blue section with vector background */}
        <div className="w-full md:flex-1 min-h-[280px] sm:min-h-[320px] md:min-h-[240px] bg-[#0099FF] rounded-[15px] relative flex items-center overflow-hidden">
          {/* Vector background at bottom */}
          <div className="absolute bottom-[-10px] left-0 w-full h-[110px] z-0">
            <Image
              src="/vector.png"
              alt="Background Vector"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>

          {/* Text content */}
          <div className="w-full md:max-w-[420px] relative z-10 pl-4 sm:pl-6 md:pl-10">
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] leading-[110%]">
              <span className="font-extrabold text-blue-800">Rental Item </span>
              <span className="font-semibold text-white">As You Like!</span>
            </h1>
            <button 
              className="mt-3 sm:mt-6 md:mt-9 text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-md font-semibold hover:opacity-90 transition-colors shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #2C1AF4 0%, #1FA4FB 100%)'
              }}
            >
              Rent Now
            </button>
          </div>

          {/* Combined car images */}
          <div className="absolute right-0 bottom-0 z-20">
            <div className="flex items-end">
              <div className="w-[120px] sm:w-[160px] md:w-[240px] h-[60px] sm:h-[80px] md:h-[120px] relative">
                <Image
                  src="/192c092dfb81d7c06b5e981653ae117526783374.png"
                  alt="Car Model 1"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
              <div className="w-[90px] sm:w-[120px] md:w-[190px] h-[45px] sm:h-[60px] md:h-[100px] relative -ml-3 sm:-ml-4 md:-ml-8">
                <Image
                  src="/pngwing.com (2) 1 (1).png"
                  alt="Car Model 2"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main car image */}
          <div className="absolute right-0 top-0 h-full w-[180px] sm:w-[250px] md:w-[320px] lg:w-[450px] z-10">
            <Image
              src="/pngwing.com (4) 1.png"
              alt="Rental Car"
              fill
              className="object-right h-full"
              priority
            />
          </div>
        </div>

        {/* Right gray section */}
        <div className="w-full md:w-[380px] min-h-[180px] sm:min-h-[200px] md:min-h-full bg-gray-100 rounded-[15px] p-3 sm:p-4 flex flex-col relative overflow-hidden">
          {/* Text content */}
          <div className="relative z-10 mb-2 h-[50px] sm:h-[60px] md:h-[70px]">
            <h2 className="text-[18px] sm:text-[20px] md:text-[26px] font-semibold leading-[111%]">
              Your Rentals,<br />On The Go
            </h2>
            <p className="text-[10px] sm:text-[11px] md:text-[13px] font-normal leading-[140%] mt-1">
              Browse, book and manage<br />your rentals from anywhere
            </p>
          </div>

          {/* Bottom section with buttons and iPhone */}
          <div className="flex-1 relative">
            {/* Download Buttons */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 z-10 w-[160px] sm:w-[180px] md:w-[220px]">
              <div className="flex gap-1 sm:gap-1.5">
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white rounded-md px-1 sm:px-1.5 md:px-2 py-0.5 hover:bg-opacity-90 transition-colors" 
                >
                  <Image
                    src="/icons8-google-play-store-50.png" 
                    width={12} 
                    height={12}
                    className="mr-0.5 sm:mr-1"
                    alt="Google Play"
                  />
                  <div className="text-left">
                    <div className="text-[6px] sm:text-[7px] md:text-[8px] leading-tight">GET IT ON</div>
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] font-bold leading-tight">Google Play</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.apple.com/app-store/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white rounded-md px-1 sm:px-1.5 md:px-2 py-0.5 hover:bg-opacity-90 transition-colors" 
                >
                  <Image
                    src="/apple.png" 
                    width={12} 
                    height={12}
                    className="mr-0.5 sm:mr-1"
                    alt="App Store"
                  />
                  <div className="text-left">
                    <div className="text-[6px] sm:text-[7px] md:text-[8px] leading-tight">Download on the</div>
                    <div className="text-[9px] sm:text-[10px] md:text-[12px] font-bold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* iPhone image */}
            <div className="absolute -right-4 sm:-right-6 md:-right-10 bottom-0 w-[150px] sm:w-[180px] md:w-[250px] h-[150px] sm:h-[180px] md:h-[250px]">
              <Image
                src="/iPhone 13 (1).png"
                alt="iPhone App"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;