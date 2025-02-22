'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Nike from '@/app/aset/Bghome.png';
import speaker from '@/app/aset/speaker.jpg';
import { useRouter } from 'next/router';
import stik from '@/app/aset/PlayStation 5  Wireless Controller.jpg';
import Playstation from '@/app/aset/Keranjang/PlaystationPutih.png';
import Jamputih from '@/app/aset/Keranjang/JamTanganputih.png';
import foto2 from '@/app/aset/assetHome/2.png';
import foto3 from '@/app/aset/assetHome/3.png';
import foto4 from '@/app/aset/assetHome/4.png';
import foto5 from '@/app/aset/assetHome/5.png';
import foto6 from '@/app/aset/assetHome/6.png';
import foto7 from '@/app/aset/assetHome/7.png';
import foto8 from '@/app/aset/assetHome/8.png';
import foto9 from '@/app/aset/assetHome/9.png';
import foto10 from '@/app/aset/assetHome/10.png';
import foto11 from '@/app/aset/assetHome/11.png';
import foto12 from '@/app/aset/assetHome/12.png';
import foto13 from '@/app/aset/assetHome/13.png';
import foto14 from '@/app/aset/assetHome/14.png';
import foto15 from '@/app/aset/assetHome/15.png';
import foto16 from '@/app/aset/assetHome/16.png';
import foto17 from '@/app/aset/assetHome/17.png';
import {
  IoMenu,
  IoSearch,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoHeart,
  IoEye,
} from 'react-icons/io5';
import Link from 'next/link';

function Home() {
  // --- Timer untuk Flash Sales ---
  const [timeLeft, setTimeLeft] = useState({
    days: '03',
    hours: '23',
    minutes: '19',
    seconds: '56'
  });

    // State untuk timer
    const [musicTimer, setMusicTimer] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
      days: 5,
      hours: 23,
      minutes: 59,
      seconds: 35
    });

  useEffect(() => {
    const targetDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({
          days: days < 10 ? '0' + String(days) : String(days),
          hours: hours < 10 ? '0' + String(hours) : String(hours),
          minutes: minutes < 10 ? '0' + String(minutes) : String(minutes),
          seconds: seconds < 10 ? '0' + String(seconds) : String(seconds),
        });
      }
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

// Hero Banner ---
  const banners = [Nike, foto2, foto3 , foto10 , foto9 , foto17, ]; 
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 1000); // Ganti banner setiap 5 detik
    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  // Flash Sales 
  const flashRef = useRef(null);
  

  const handlePrevFlash = () => {
    if (flashRef.current) {

      const element = flashRef.current as HTMLElement;
      element.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const handleNextFlash = () => {
    if (flashRef.current) {

      const element = flashRef.current as HTMLElement;
      element.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const countdown = setInterval(() => {
      setMusicTimer((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(countdown);
          return prev; // Timer sudah habis
        }

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-gray-600">
                <IoMenu className="text-2xl" />
              </button>
              <h1 className="text-xl font-bold text-black">Grab & Ship</h1>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search..."
                  className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10"
                />
                <button className="absolute right-3 top-2.5 text-gray-400">
                  <IoSearch className="text-2xl" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/Barangfavorite">
                <button className="text-black">
                  <IoHeartOutline className="text-2xl" />
                </button>
              </Link>
              <Link href="/Keranjang">
                <button className="text-black">
                  <IoCartOutline className="text-2xl" />
                </button>
              </Link>
              <button className="px-4 py-1.5 bg-[#315CEA] text-white rounded-full text-sm">
                Sign up
              </button>
              <button className="px-4 py-1.5 bg-[#315CEA] text-white rounded-full text-sm">
                Login
              </button>
              <Link href="/Profile">
                <button className="text-black">
                  <IoPersonOutline className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="mt-4 flex justify-center">
            <div className="flex items-center space-x-4 mx-auto">
              <Link href="/Home">
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">All Category</button>
              </Link>
              <Link href="/Fashion">
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">
                  Fashion
                </button>
              </Link>
              <Link href="/Gadget">
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Gadget</button>
              </Link>
              <Link href="/aksesoris">
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Aksesoris</button>
              </Link>
              <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200">Lainnya</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Banner with Carousel */}
        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src={banners[currentBannerIndex]}
            alt="Banner"
            className="w-full h-[400px] object-cover"
            width={1200}
            height={400}
          />
        </div>

        {/* Flash Sales */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-[#315CEA]"></div>
            <h2 className="text-base text-[#315CEA]">Today's</h2>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-black">Flash Sales</h2>
              <div className="flex gap-4 ml-8">
                <div className="text-center">
                  <div className="text-lg font-bold text-black">{timeLeft.days}</div>
                  <div className="text-sm text-gray-500">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-black">{timeLeft.hours}</div>
                  <div className="text-sm text-gray-500">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-black">{timeLeft.minutes}</div>
                  <div className="text-sm text-gray-500">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-black">{timeLeft.seconds}</div>
                  <div className="text-sm text-gray-500">Seconds</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={handlePrevFlash} className="p-2 rounded-full bg-gray-100">
                <IoCaretBackOutline className="text-2xl text-black" />
              </button>
              <button onClick={handleNextFlash} className="p-2 rounded-full bg-gray-100">
                <IoCaretForwardOutline className="text-2xl text-black" />
              </button>
            </div>
          </div>

          <div ref={flashRef} className="grid grid-cols-5 gap-6 overflow-x-auto">
            {[
              {
                img: stik,
                name: "Controller Playstation 5",
                price: 399,
                originalPrice: 320,
                discount: 40,
                rating: 5,
                reviews: 88,
              },
              {
                img: foto2,
                name: "Mac-Pro 2020",
                price: 1299,
                originalPrice: 1960,
                discount: 35,
                rating: 4,
                reviews: 75,
              },
              {
                img: foto3,
                name: "HP Laptop",
                price: 799,
                originalPrice: 370,
                discount: 30,
                rating: 5,
                reviews: 99,
              },
              {
                img: foto4,
                name: "Asus Gaming Keyboard",
                price: 399,
                originalPrice: 375,
                discount: 25,
                rating: 4.5,
                reviews: 99,
              },
              {
                img: foto5,
                name: "Brother Printer",
                price: 399,
                originalPrice: 375,
                discount: 25,
                rating: 4.5,
                reviews: 99,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                    width={200}
                    height={200}
                  />
                  <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                    -{item.discount}%
                  </span>
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoHeart className="text-black" />
                    </button>
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoEye className="text-black" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-black mb-2">{item.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#DB4444] font-medium">${item.price}</span>
                  <span className="text-gray-400 line-through">${item.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(item.rating))}
                  </div>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>
                <Link href="/Detail">
                  <button className="w-full mt-4 py-2 bg-[#315CEA] text-white rounded-sm text-sm">
                    Add To Cart
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* This Month */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-[#315CEA]"></div>
            <h2 className="text-base text-[#315CEA]">This Month</h2>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Produk Terbaik di Amerika</h2>
            <button className="px-6 py-2 bg-[#315CEA] text-white rounded-sm">View All</button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                img: foto6,
                name: "The north coat",
                price: "399",
                originalPrice: "360",
                rating: 5,
                reviews: 65,
              },
              {
                img: foto7,
                name: "Gucci duffle bag",
                price: "399",
                originalPrice: "1160",
                rating: 5,
                reviews: 65,
              },
              {
                img: foto8,
                name: "RGB liquid CPU Cooler",
                price: "399",
                originalPrice: "170",
                rating: 5,
                reviews: 65,
              },
              {
                img: foto9,
                name: "Small BookSelf",
                price: "399",
                originalPrice: null,
                rating: 5,
                reviews: 65,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                    width={200}
                    height={200}
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoHeart className="text-black" />
                    </button>
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoEye className="text-black" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-black mb-2">{item.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#DB4444] font-medium">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through">${item.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(item.rating))}
                  </div>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>
              </div>
            ))}
          </div>
        </section>

       {/* Enhanced Music Experience Section */}
       <section className="mb-12">
        <div className="relative bg-gradient-to-r from-emerald-200 via-sky-200 to-indigo-300 text-black rounded-lg p-12 flex items-center min-h-[500px]">
          <div className="flex-1">
            <p className="text-white text-xl mb-2">Categories</p>
            <h2 className="text-4xl font-bold mb-12 text-black">
              Enhance Your
              <br />Music Experience
            </h2>
            <div className="flex gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-xl font-bold">{musicTimer.hours.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm">Hours</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-xl font-bold">{musicTimer.days.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm">Days</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-xl font-bold">{musicTimer.minutes.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm">Minutes</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="text-xl font-bold">{musicTimer.seconds.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-sm">Seconds</span>
              </div>
            </div>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Beli sekarang
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={speaker}
              alt="JBL Speaker"
              className="w-full h-auto object-contain"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      
        {/* Our Products Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-[#315CEA]"></div>
            <h2 className="text-base text-[#315CEA]">Our Products</h2>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">Jelajahi produk dari Luar</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100">
                <IoCaretBackOutline className="text-2xl text-black" />
              </button>
              <button className="p-2 rounded-full bg-gray-100">
                <IoCaretForwardOutline className="text-2xl text-black" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              {
                img: foto10,
                name: "Breed Dry Dog Food",
                price: "100",
                rating: 4,
                reviews: 35,
                new: true,
              },
              {
                img: foto11,
                name: "CANON EOS DSLR Camera",
                price: "360",
                rating: 4,
                reviews: 95,
                new: true,
              },
              {
                img: foto12,
                name: "ASUS FHD Gaming Laptop",
                price: "700",
                rating: 5,
                reviews: 325,
                new: true,
              },
              {
                img: foto13,
                name: "Curology Product Set",
                price: "500",
                rating: 4,
                reviews: 145,
                new: true,
              },
              {
                img: foto14,
                name: "Kids Electric Car",
                price: "960",
                rating: 5,
                reviews: 65,
                new: true,
              },
              {
                img: foto15,
                name: "Jr. Zoom Soccer Cleats",
                price: "1160",
                rating: 4,
                reviews: 35,
                new: true,
              },
              {
                img: foto16,
                name: "GP11 Shooter USB Gamepad",
                price: "660",
                rating: 4,
                reviews: 55,
                new: true,
              },
              {
                img: foto17,
                name: "Quilted Satin Jacket",
                price: "660",
                rating: 4,
                reviews: 55,
                new: true,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-sm border border-gray-100 p-4">
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                    width={200}
                    height={200}
                  />
                  {item.new && (
                    <span className="absolute top-2 left-2 bg-[#315CEA] text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoHeart className="text-black" />
                    </button>
                    <button className="p-1.5 bg-white rounded-full shadow-sm">
                      <IoEye className="text-black" />
                    </button>
                  </div>
                </div>
                <h3 className="font-medium text-black mb-2">{item.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#DB4444] font-medium">${item.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(item.rating))}
                  </div>
                  <span className="text-sm text-gray-500">({item.reviews})</span>
                </div>
                {index > -1 && (
                  <button className="w-full mt-4 py-2 bg-[#315CEA] text-white rounded-sm text-sm">
                    Add To Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-blue-600"></div>
            <h2 className="text-base text-blue-600">Produk Terbaru</h2>
          </div>

          <h2 className="text-3xl font-bold text-black mb-8">Produk terbaru dari Jepang</h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - PS5 */}
            <div className="relative bg-gradient-to-r from-emerald-200 via-sky-200 to-indigo-3000 rounded-2xl overflow-hidden col-span-7 h-[600px]">
              <Image
                src={Playstation}
                alt="PlayStation 5"
                className="w-full h-full object-cover p-8"
                width={700}
                height={700}
              />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
                <p className="mb-4 text-sm opacity-90">Black and White version of the PS5 coming out on sale.</p>
                <button className="text-white hover:underline font-medium">Shop Now</button>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5 flex flex-col gap-6">
              {/* Women's Collections */}
              <div className="relative bg-gradient-to-r from-blue-400 to-gray-200 rounded-2xl overflow-hidden h-[300px]">
                <div className="absolute top-0 left-0 p-6 z-10 max-w-[60%]">
                  <h3 className="text-xl font-bold text-black mb-2">Women's Collections</h3>
                  <p className="text-sm text-gray-700 mb-4">Featured woman collections that give you another vibe.</p>
                  <button className="text-black hover:underline font-medium">Shop Now</button>
                </div>
                <Image
                  src={Jamputih}
                  alt="PlayStation 5"
                  className="w-full h-full object-cover p-8"
                  width={700}
                  height={700}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Speakers */}
                <div className="bg-blue-50 rounded-2xl p-6 h-[250px] relative">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">Speakers</h3>
                    <p className="text-sm text-gray-700 mb-2">Amazon wireless speakers</p>
                    <button className="text-black hover:underline font-medium">Shop Now</button>
                  </div>
                  <Image
                    src={Playstation}
                    alt="PlayStation 5"
                    className="w-full h-full object-cover p-8"
                    width={700}
                    height={700}
                  />
                </div>

                {/* Perfume */}
                <div className="bg-blue-50 rounded-2xl p-6 h-[250px] relative">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">Perfume</h3>
                    <p className="text-sm text-gray-700 mb-2">GUCCI INTENSE OUD EDP</p>
                    <button className="text-black hover:underline font-medium">Shop Now</button>
                  </div>
                  <img
                    src="/api/placeholder/150/150"
                    alt="Perfume"
                    className="absolute bottom-4 right-4 w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-white pt-12 pb-6 border-t">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h2 className="text-black text-xl font-bold mb-6">Tentang Grab and ship.com</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Solusi Logistik
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-black text-xl font-bold mb-6">Promo & Layanan</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Promo Terbaru
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Layanan Pengiriman
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Pengiriman Internasional
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Cek Ongkir
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-black text-xl font-bold mb-6">Pusat Bantuan</h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Bantuan Pelanggan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Developers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-black text-2xl font-bold mb-6">Grab and ship</h2>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-16zm6.988 0h-4.992v16h4.992v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h5v-9.141c0-7.477-8.029-7.253-11.02-3.538v-3.32z" />
                  </svg>
                </a>
              </div>
              <div className="space-y-4">
                <button className=" text-black w-full px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
                  English
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm">
            © 2024 Grab.com. All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}


export default Home;
