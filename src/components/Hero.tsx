import React from 'react';
import { Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <Wrench className="h-20 w-20 text-blue-500" />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Teknolojik Levye</span>
                <span className="block text-blue-500 text-3xl sm:text-4xl mt-3">
                  Oyun ve Teknoloji hakkında her şey!
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Bizi sosyal medya hesaplarımızdan takip etmeyi unutma!
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;