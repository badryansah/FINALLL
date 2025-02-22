import React from 'react';
import { FaTruck, FaCreditCard, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoPersonOutline, IoCartOutline, IoHeartOutline, IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Gadget1 from "@/app/aset/AssetGadget/1.png"
import Gadget2 from '@/app/aset/AssetGadget/2.png';
import Gadget3 from '@/app/aset/AssetGadget/3.png';
import Gadget4 from '@/app/aset/AssetGadget/4.png';
import Image from 'next/image';

const EcommercePage = () => {
  const products = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      discountedPrice: 1160,
      image: 'parfum',
      discount: '-35%'
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Grab and Ship</h1>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="search..."
                className="w-full px-4 py-2 border rounded-lg"
              />
              <IoSearch className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative">
              <IoHeartOutline size={24} />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button>
              <IoCartOutline size={24} />
            </button>
            <button>
              <IoPersonOutline size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-900">Home</a>
          <span>/</span>
          <span>Barang favorit</span>
        </div>

        <h2 className="text-xl font-semibold mb-8">Favorit (4)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white relative flex flex-col">
              <div className="bg-gray-50 p-6 relative mb-4">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-xs">
                    {product.discount}
                  </span>
                )}
                <button className="absolute top-2 right-2 text-blue-500 hover:text-blue-600">
                  <IoClose size={20} />
                </button>
                <div className="flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-medium text-sm mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold">${product.price}</span>
                  {product.discountedPrice && (
                    <span className="text-gray-400 line-through text-sm">${product.discountedPrice}</span>
                  )}
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center gap-2 text-sm">
                  <IoCartOutline size={16} />
                  Masukkan keranjang
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <h3 className="text-lg font-semibold">Untuk Kamu</h3>
          <button className="text-gray-500 hover:text-gray-700">Liat semua</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex gap-4 mb-8">
                <FaTwitter className="text-gray-400 hover:text-gray-600" size={20} />
                <FaInstagram className="text-gray-400 hover:text-gray-600" size={20} />
                <FaFacebookF className="text-gray-400 hover:text-gray-600" size={20} />
                <FaLinkedinIn className="text-gray-400 hover:text-gray-600" size={20} />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tentang Grip.com</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Visi & Misi</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Karir</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Solusi Logistik</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Promo & Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Promo Terbaru</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Layanan Pengiriman</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Pengiriman Internasional</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Cek Ongkir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pusat Bantuan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Bantuan Pelanggan</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">FAQ</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Syarat dan Ketentuan</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Kebijakan Privasi</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Support</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-700">Developers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t flex justify-between items-center">
            <p className="text-gray-500">© 2024 Grip.com. All Rights Reserved.</p>
            <h2 className="text-xl font-bold">Grab and Ship</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePage;