'use client';
import React, { useState } from 'react';
import { FaTruck, FaCreditCard, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoPersonOutline, IoCartOutline, IoHeartOutline, IoSearch,IoHomeOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import sps5 from '@/app/aset/PlayStation 5  Wireless Controller.jpg';
import props5 from '@/app/aset/ps5 pro controller.webp';
import ps6 from '@/app/aset/ps6controller.webp';
import chs6 from '@/app/aset/charger.jpg';
import LCDMonitor from '@/app/aset/monitor.png';
import parfum from '@/app/aset/assetHome/2.png';  
import ps5 from '@/app/aset/assetHome/3.png';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = [
    { name: 'Black', value: 'black' },
    { name: 'Beige', value: 'beige' }
  ];
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">Grab & Ship</h1>
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="border p-2 pl-10 rounded-md w-full" 
          />
        </div>
        <div className="flex gap-4">
        <Link href="/Home">
          <button>
           <IoHomeOutline className="text-gray-600 text-xl" />
           </button>
          </Link>
          <IoHeartOutline className="text-gray-600 text-xl" />
          <IoCartOutline className="text-gray-600 text-xl" />
          <IoPersonOutline className="text-gray-600 text-xl" />
        </div>
      </header>

      <main className="container mx-auto p-6 bg-white shadow-md mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image src={sps5} alt="Gamepad" width={400} height={300} className="rounded-md" />
            <div className="flex gap-2 mt-2">
              <Image src={props5} alt="Gamepad Side 1" width={80} height={80} className="rounded-md" />
              <Image src={ps6} alt="Gamepad Side 2" width={80} height={80} className="rounded-md" />
              <Image src={chs6} alt="Gamepad Side 3" width={80} height={80} className="rounded-md" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black">Havic HV G-92 Gamepad</h2>
            <p className="text-yellow-500">⭐⭐⭐⭐ 4.5 (120 reviews)</p>
            <p className="text-2xl font-bold text-gray-800">$192.00</p>
            <p className="text-gray-600 mt-2">Wireless gaming controller with high-speed response and ergonomic design.</p>

            {/* Color Selector */}
            <div className="mt-4">
              <label className="font-semibold text-gray-600 mt-2 ">Warna:</label>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedColor === color.value ? 'ring-2 ring-black' : ''}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                  >
                    {selectedColor === color.value && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-4">
              <label className="font-semibold text-gray-600 mt-2">Size:</label>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-green-500 text-white' : 'bg-white'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link href="/Keranjang">
                <button className="bg-[#315CEA] text-white px-6 py-2 rounded-md">Pesan Sekarang</button>
              </Link>

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
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-black">You may also like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 text-black gap-6">
            {[
              { name: 'Gaming Monitor', price: '$159,84', image: LCDMonitor },
              { name: 'Mac Pro 2023', price: '$99.00', image: parfum },
              { name: 'Laptop Hewlett-Packard', price: '$463.67', image: ps5 },
              { name: 'Controller Ps 5', price: '$70.00', image: props5 },
            ].map((item, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm flex flex-col items-center">
                <div className="w-40 h-40 relative">
                  <Image src={item.image} alt={item.name} width={160} height={160} objectFit="contain" className="rounded-md" />
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
  );
};

export default Detail;
