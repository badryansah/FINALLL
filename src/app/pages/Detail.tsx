'use client';
import React, { useState } from 'react';
import {  FaTruck, FaCreditCard, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoPersonOutline, IoCartOutline, IoHeartOutline, IoSearch } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import sps5 from '@/app/aset/PlayStation 5  Wireless Controller.jpg'
import props5 from '@/app/aset/ps5 pro controller.webp'
import ps6 from '@/app/aset/ps6controller.webp'
import chs6 from '@/app/aset/charger.jpg'
import LCDMonitor from '@/app/aset/monitor.png';
import parfum from '@/app/aset/Eros EDP 100 ml.jpg';  
import ps5 from '@/app/aset/ps5.jpg';

function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Black');

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Grab & Ship</h1>
          <div className="relative">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="border p-2 pl-10 rounded-md w-full" 
            />
          </div>
          <div className="flex gap-4">
            <IoHeartOutline className="text-gray-600 text-xl" />
            <IoCartOutline className="text-gray-600 text-xl" />
            <IoPersonOutline className="text-gray-600 text-xl" />
          </div>
        </header>

        <main className="container mx-auto p-6 bg-white shadow-md mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Images */}
            <div>
              <Image src={sps5} alt="Gamepad" width={400} height={300} className="rounded-md" />
              <div className="flex gap-2 mt-2">
                <div className="w-24 h-20 relative">
                  <Image src={props5} alt="Gamepad Side 1" layout="fill" objectFit="contain" className="rounded-md" />
                </div>
                <div className="w-24 h-20 relative">
                  <Image src={ps6} alt="Gamepad Side 2" layout="fill" objectFit="contain" className="rounded-md" />
                </div>
                <div className="w-24 h-20 relative">
                  <Image src={chs6} alt="Gamepad Side 3" layout="fill" objectFit="contain" className="rounded-md" />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
              <p className="text-yellow-500">⭐⭐⭐⭐ 4.5 (120 reviews)</p>
              <p className="text-2xl font-bold text-gray-800">$192.00</p>
              <p className="text-gray-600 mt-2">
                Wireless gaming controller with high-speed response and ergonomic design.
              </p>

              {/* Color Selector */}
              <div className="mt-4">
                <label className="font-semibold">Color:</label>
                <select className="border p-2 rounded-md ml-2" value={color} onChange={(e) => setColor(e.target.value)}>
                  <option>Black</option>
                  <option>White</option>
                  <option>Red</option>
                </select>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="font-semibold">Size:</label>
                <select className="border p-2 rounded-md ml-2">
                  <option>Standard</option>
                  <option>Large</option>
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="mt-4">
                <label className="font-semibold">Quantity:</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                  className="border p-2 rounded-md ml-2 w-16 text-center" 
                  min="1"
                />
              </div>

              <div className="mt-4 flex gap-4">
                <button className="bg-[#C49B78] text-white px-6 py-2 rounded-md">
                  Pesan Sekarang
                </button>
              </div>

              {/* Additional Features */}
              <div className="mt-6 border-t pt-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <FaTruck className="text-green-600" />
                  <p>Free shipping available</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FaCreditCard className="text-blue-600" />
                  <p>Multiple payment options</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold mb-4">You may also like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'RFS LCD Gaming Monitor', price: '$179.00', image: LCDMonitor },
                { name: 'Versace Eros EDP 100ml', price: '$99.00', image: parfum },
                { name: 'PlayStation 5', price: '$499.00', image: ps5 },
                { name: 'Havic HV-G92 Gamepad', price: '$89.00', image: props5 },
              ].map((item, index) => (
                <div key={index} className="border p-4 rounded-md shadow-sm flex flex-col items-center">
                  <div className="w-40 h-40 relative">
                    <Image src={item.image} alt={item.name} layout="fill" objectFit="contain" className="rounded-md" />
                  </div>
                  <h4 className="mt-2 font-semibold text-center">{item.name}</h4>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white text-black py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tentang Grip.com */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Tentang Grip.com</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-gray-600">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/karir" className="hover:text-gray-600">Karir</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-gray-600">Blog</Link>
                  </li>
                  <li>
                    <Link href="/press" className="hover:text-gray-600">Press</Link>
                  </li>
                </ul>
              </div>

              {/* Promo & Layanan */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Promo & Layanan</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/promo" className="hover:text-gray-600">Promo</Link>
                  </li>
                  <li>
                    <Link href="/layanan" className="hover:text-gray-600">Layanan</Link>
                  </li>
                  <li>
                    <Link href="/syarat-ketentuan" className="hover:text-gray-600">Syarat & Ketentuan</Link>
                  </li>
                  <li>
                    <Link href="/kebijakan-privasi" className="hover:text-gray-600">Kebijakan Privasi</Link>
                  </li>
                </ul>
              </div>

              {/* Pusat Bantuan */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Pusat Bantuan</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/faq" className="hover:text-gray-600">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/kontak" className="hover:text-gray-600">Kontak</Link>
                  </li>
                  <li>
                    <Link href="/pengembalian" className="hover:text-gray-600">Pengembalian</Link>
                  </li>
                  <li>
                    <Link href="/pengiriman" className="hover:text-gray-600">Pengiriman</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex justify-end space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                <FaLinkedinIn size={24} />
              </a>
            </div>

            {/* Copyright Notice */}
            <div className="mt-8 text-center text-sm">
              <p>&copy; 2025 Grip.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Detail;
