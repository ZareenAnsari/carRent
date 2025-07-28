'use client';

import Header from './components/Header';
import RentCategories from './components/RentCategories';
import Herosection from './components/Herosection';
import Newbranch from './components/newbranch';
import CategorySection from './components/CategorySection';



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header />
        <Herosection />
        <RentCategories />
        <Newbranch/>
        <CategorySection/>
       
      </div>
    </main>
  );
}
