import React from "react";
import { FaArrowLeft, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoHeart, IoSearch, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import sps5 from '@/app/aset/PlayStation 5  Wireless Controller.jpg'
import LCDMonitor from '@/app/aset/monitor.png';
const Keranjang = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Navbar */}
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="font-bold text-lg">Grab & Ship</h1>
        <div className="flex items-center space-x-2 border px-3 py-2 rounded-md w-1/3">
          <IoSearch className="text-xl" />
          <input type="text" placeholder="Search..." className="w-full outline-none" />
        </div>
        <div className="flex items-center space-x-4">
          <IoHeart className="text-2xl cursor-pointer" />
          < IoCartOutline className="text-2xl cursor-pointer" />
          <IoPersonOutline className="text-2xl cursor-pointer" />
        </div>
      </header>
      
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 p-4">Home / <span className="text-gray-800">Cart</span></div>
      
      {/* Cart Table */}
      <div className="bg-white p-4 shadow-md rounded-lg m-4">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Product</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Jumlah Barang</th>
              <th className="p-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 flex items-center">
              <Image src={LCDMonitor} alt="LCD Monitor" className="w-12 h-12 mr-2" />
                LCD Monitor
              </td>
              <td className="p-3">$650</td>
              <td className="p-3">
                <select className="border p-1">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="p-3">$650</td>
            </tr>
            <tr>
              <td className="p-3 flex items-center">
                <Image src={sps5} alt="Gamepad" className="w-12 h-12 mr-2" />
                HI Gamepad
              </td>
              <td className="p-3">$550</td>
              <td className="p-3">
                <select className="border p-1">
                  <option>01</option>
                  <option selected>02</option>
                  <option>03</option>
                </select>
              </td>
              <td className="p-3">$1100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-6 p-4">
        <button className="flex items-center bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400">
          <FaArrowLeft className="mr-2" /> Kembali
        </button>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="kupon kode"
            className="border p-2 mr-2 rounded-md"
          />
          <button className="bg-[#C49B78] text-white px-4 py-2 rounded-md">Masukkan Kupon</button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border p-4 rounded-md mt-6 w-80 ml-auto m-4">
        <h3 className="text-lg font-semibold mb-2">Total Belanja</h3>
        <div className="flex justify-between border-b pb-2">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="flex justify-between border-b pb-2 mt-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mt-2">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <button className="bg-[#C49B78] text-white w-full py-2 mt-4 rounded-md flex items-center justify-center">
           Checkout
        </button>
      </div>

      {/* New Footer */}
      <footer className="bg-white text-black py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tentang Grip.com</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-gray-600">Tentang Kami</a></li>
                <li><a href="/karir" className="hover:text-gray-600">Karir</a></li>
                <li><a href="/blog" className="hover:text-gray-600">Blog</a></li>
                <li><a href="/press" className="hover:text-gray-600">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Promo & Layanan</h3>
              <ul className="space-y-2">
                <li><a href="/promo" className="hover:text-gray-600">Promo</a></li>
                <li><a href="/layanan" className="hover:text-gray-600">Layanan</a></li>
                <li><a href="/syarat-ketentuan" className="hover:text-gray-600">Syarat & Ketentuan</a></li>
                <li><a href="/kebijakan-privasi" className="hover:text-gray-600">Kebijakan Privasi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Pusat Bantuan</h3>
              <ul className="space-y-2">
                <li><a href="/faq" className="hover:text-gray-600">FAQ</a></li>
                <li><a href="/kontak" className="hover:text-gray-600">Kontak</a></li>
                <li><a href="/pengembalian" className="hover:text-gray-600">Pengembalian</a></li>
                <li><a href="/pengiriman" className="hover:text-gray-600">Pengiriman</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-6">
            <a href="#" className="hover:text-gray-600"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-gray-600"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-600"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-gray-600"><FaLinkedinIn size={24} /></a>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 Grip.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Keranjang;
