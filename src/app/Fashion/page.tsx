import React from 'react';  
import Image from 'next/image'; // Import the Next.js Image component  
import Baju from '@/app/aset/Benner/Fashion.png';
import jaket1 from '@/app/aset/asetFashion/jaket1.png';
import jaket2 from '@/app/aset/asetFashion/jaket2.png';
import jaket3 from '@/app/aset/asetFashion/jaket3.png';
import jaket4 from '@/app/aset/asetFashion/jaket4.png';
import jaket5 from '@/app/aset/asetFashion/jaket5.png';

import kaos1 from '@/app/aset/asetFashion/kaos1.png';
import kaos2 from '@/app/aset/asetFashion/kaos2.png';
import kaos3 from '@/app/aset/asetFashion/kaos3.png';
import kaos4 from '@/app/aset/asetFashion/kaos4.png';
import kaos5 from '@/app/aset/asetFashion/kaos5.png';

import ohraga1 from '@/app/aset/asetFashion/olhraga1.png';
import ohraga2 from '@/app/aset/asetFashion/olhraga2.png';
import ohraga3 from '@/app/aset/asetFashion/olhraga3.png';
import ohraga4 from '@/app/aset/asetFashion/olhraga4.png';
import ohraga5 from '@/app/aset/asetFashion/olhraga5.png';

import celana1 from '@/app/aset/asetFashion/celana1.png';
import celana2 from '@/app/aset/asetFashion/celana2.png';
import celana3 from '@/app/aset/asetFashion/celana3.png';
import celana4 from '@/app/aset/asetFashion/celana4.png';
import celana5 from '@/app/aset/asetFashion/celana5.png';

import kacamata1 from '@/app/aset/asetFashion/kacamata1.png';
import kacamata2 from '@/app/aset/asetFashion/kacamata2.png';
import kacamata3 from '@/app/aset/asetFashion/kacamata3.png';
import kacamata4 from '@/app/aset/asetFashion/kacamata4.png';
import kacamata5 from '@/app/aset/asetFashion/kacamata5.png';

import sendal1 from '@/app/aset/asetFashion/sendal1.png';
import sendal2 from '@/app/aset/asetFashion/sendal2.png';
import sendal3 from '@/app/aset/asetFashion/sendal3.png';
import sendal4 from '@/app/aset/asetFashion/sendal4.png';
import sendal5 from '@/app/aset/asetFashion/sendal5.png';

import sepatu1 from '@/app/aset/asetFashion/sepatu1.png';
import sepatu2 from '@/app/aset/asetFashion/sepatu2.png';
import sepatu3 from '@/app/aset/asetFashion/sepatu3.png';
import sepatu4 from '@/app/aset/asetFashion/sepatu4.png';
import sepatu5 from '@/app/aset/asetFashion/sepatu5.png';

import tas1 from '@/app/aset/asetFashion/tas1.png';
import tas2 from '@/app/aset/asetFashion/tas2.png';
import tas3 from '@/app/aset/asetFashion/tas3.png';
import tas4 from '@/app/aset/asetFashion/tas4.png';
import tas5 from '@/app/aset/asetFashion/tas5.png';


import {
  IoMenu,
  IoSearch,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
  IoHeart,
  IoEye
} from 'react-icons/io5';
import Link from 'next/link';

// Define the Fashion component  
function Fashion() {  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}    
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
                <button className="px-6 py-2 bg-gray-100 rounded-full text-black hover:bg-gray-200 ">
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
        {/* Hero Banner */}  
        <div className="rounded-lg overflow-hidden mb-8">  
          <Image   
            src={Baju}  
            alt="Nike shoes banner"  
            className="w-full h-[400px] object-cover"  
            width={1200}  
            height={400}  
          />  
        </div>

        {/* Flash Sales */}  
        <section className="mb-12">  
          <div className="flex items-center gap-2 mb-6">  
            <div className="w-1 h-6 bg-[#315CEA]"></div>  
            <h2 className="text-base text-[#315CEA]">Kaos</h2>  
          </div>
    
          <div className="grid grid-cols-5 gap-6">  
            {[  
             {
              img: kaos1,
              name: "Urban Wave Tee",
              price: 12,
              originalPrice: 19,
              discount: 10,
              rating: 4.8,
              reviews: 88
              },
              {
              img: kaos2,
              name: "Star Motion Tee",
              price: 9,
              originalPrice: 15,
              discount: 15,
              rating: 4.2,
              reviews: 75
              },
              {
              img: kaos3,
              name: "Neon Graffiti Tee",
              price: 13,
              originalPrice: 18,
              discount: 9,
              rating: 4.9,
              reviews: 99
              },
              {
              img: kaos4,
              name: "Essential Dark Tee",
              price: 10,
              originalPrice: 16,
              discount: 20,
              rating: 4.5,
              reviews: 99
              },
              {
              img: kaos5,
              name: "Basic Sand Tee",
              price: 15,
              originalPrice: 22,
              discount: 15,
              rating: 4.7,
              reviews: 99
              }
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
              </div>  
            ))}  
          </div>  
    </section>
          <div className="flex justify-center mt-8"> 
          </div>  
          
          {/* Flash Sales */}  
        <section className="mb-12">  
          <div className="flex items-center gap-2 mb-6">  
            <div className="w-1 h-6 bg-[#315CEA]"></div>  
            <h2 className="text-base text-[#315CEA]">Hoodie</h2>  
          </div>
    
          <div className="grid grid-cols-5 gap-6">  
            {[  
             {
              img: jaket1,
              name: "Cozy Winter Hoodie",
              price: 15,
              originalPrice: 25,
              discount: 12,
              rating: 4.8,
              reviews: 88
              },
              {
              img: jaket2,
              name: "Street Style Sweater",
              price: 18,
              originalPrice: 35,
              discount: 15,
              rating: 4.2,
              reviews: 75
              },
              {
              img: jaket3,
              name: "Dark Cloud Jacket",
              price: 12,
              originalPrice: 28,
              discount: 10,
              rating: 4.9,
              reviews: 99
              },
              {
              img: jaket4,
              name: "Worker Basic Jacket",
              price: 16,
              originalPrice: 32,
              rating: 4.5,
              discount: 14,
              reviews: 99
              },
              {
              img: jaket5,
              name: "Checker Pattern Coat",
              price: 14,
              originalPrice: 30,
              discount: 13,
              rating: 4.7,
              reviews: 99
              }
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
              </div>  
            ))}  
          </div>  
    
          <div className="flex justify-center mt-8"> 
          </div>  
        </section>  

        {/* Flash Sales */}  
        <section className="mb-12">  
          <div className="flex items-center gap-2 mb-6">  
            <div className="w-1 h-6 bg-[#315CEA]"></div>  
            <h2 className="text-base text-[#315CEA]">Sport</h2>  
          </div>
    
          <div className="grid grid-cols-5 gap-6">  
            {[  
          {
            img: ohraga1,
            name: "Nike Pro Elite Jersey",
            price: 15,
            originalPrice: 25,
            discount: 40,
            rating: 5,
            reviews: 88
            },
            {
            img: ohraga2,
            name: "Sport Performance Tee",
            price: 18,
            originalPrice: 27,
            discount: 35,
            rating: 4,
            reviews: 75
            },
            {
            img: ohraga3,
            name: "Urban Camo Training Shirt",
            price: 13,
            originalPrice: 19,
            discount: 30,
            rating: 5,
            reviews: 99
            },
            {
            img: ohraga4,
            name: "Under Armour Training Tee",
            price: 16,
            originalPrice: 21,
            discount: 25,
            rating: 4.5,
            reviews: 99
            },
            {
            img: ohraga5,
            name: "Adidas Basic Sport Tee",
            price: 14,
            originalPrice: 19,
            discount: 25,
            rating: 4.5,
            reviews: 99
            }
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
              </div>  
            ))}  
          </div>  
    
          <div className="flex justify-center mt-8"> 
          </div>  
          </section>
          {/* Flash Sales */}  
        <section className="mb-12">  
          <div className="flex items-center gap-2 mb-6">  
            <div className="w-1 h-6 bg-[#315CEA]"></div>  
            <h2 className="text-base text-[#315CEA]">Tas</h2>  
          </div>
    
          <div className="grid grid-cols-5 gap-6">  
            {[  
           {  
            img: tas1,  
            name: "Black Backpack ",  
            price: 120,  
            originalPrice: 200,  
            discount: 40,  
            rating: 5,  
            reviews: 88  
          },  
          {  
            img: tas2,  
            name: "Ruched Black Handbag",  
            price: 130,  
            originalPrice: 200,  
            discount: 35,  
            rating: 4,  
            reviews: 75  
          },  
          {  
            img: tas3,  
            name: "Pink Ruched Shoulder Bag",  
            price: 140,   
            originalPrice: 200,  
            discount: 30,  
            rating: 5,  
            reviews: 99  
          },  
          {  
            img: tas4,  
            name: "Black Shoulder Bag",  
            price: 150,  
            originalPrice: 200,  
            discount: 25,  
            rating: 4.5,  
            reviews: 99  
          },  
          {  
            img: tas5,  
            name: "Floral Plush Shoulder Bag",  
            price: 160,  
            originalPrice: 200,  
            discount: 25,  
            rating: 4.5,  
            reviews: 99  
          }
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
              </div>  
            ))}  
          </div>  
    </section>
          <div className="flex justify-center mt-8"> 
          </div>  
          
          {/* Flash Sales */}  
        <section className="mb-12">  
          <div className="flex items-center gap-2 mb-6">  
            <div className="w-1 h-6 bg-[#315CEA]"></div>  
            <h2 className="text-base text-[#315CEA]">Sendal</h2>  
          </div>
    
          <div className="grid grid-cols-5 gap-6">  
            {[  
              {  
                img: sendal1,  
                name: "Pink Minimalist Sandals",  
                price: 90,  
                originalPrice: 150,  
                discount: 40,  
                rating: 5,  
                reviews: 88  
              },  
              {  
                img: sendal2,  
                name: "Black Flip Flops",  
                price: 130,  
                originalPrice: 200,  
                discount: 35,  
                rating: 4,  
                reviews: 75  
              },  
              {  
                img: sendal3,  
                name: "Beige Bow Sandals",  
                price: 140,   
                originalPrice: 200,  
                discount: 30,  
                rating: 5,  
                reviews: 99  
              },  
              {  
                img: sendal4,  
                name: "Black Triple Strap Sandals",  
                price: 150,  
                originalPrice: 200,  
                discount: 25,  
                rating: 4.5,  
                reviews: 99  
              },  
              {  
                img: sendal5,  
                name: "Brown Bow Sandals",  
                price: 160,  
                originalPrice: 200,  
                discount: 25,  
                rating: 4.5,  
                reviews: 99  
              } 
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
              </div>  
            ))}  
          </div>  
    
          <div className="flex justify-center mt-8"> 
          </div>  
        </section>  

      
  {/* Footer */}
<footer className="bg-white pt-12 pb-6 border-t">
  <div className="grid grid-cols-4 gap-8 mb-12">
    <div>
      <h2 className="text-black text-xl font-bold mb-6">Tentang Grab and ship.com</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Tentang Kami</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Visi & Misi</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Karir</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Solusi Logistik</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-xl font-bold mb-6">Promo & Layanan</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Promo Terbaru</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Layanan Pengiriman</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Pengiriman Internasional</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Cek Ongkir</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-xl font-bold mb-6">Pusat Bantuan</h2>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Bantuan Pelanggan</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Syarat dan Ketentuan</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Developers</a></li>
      </ul>
    </div>

    <div>
      <h2 className="text-black text-2xl font-bold mb-6">Grab and ship</h2>
      <div className="flex space-x-4 mb-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-16zm6.988 0h-4.992v16h4.992v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h5v-9.141c0-7.477-8.029-7.253-11.02-3.538v-3.32z"/></svg>
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
  
export default Fashion;  