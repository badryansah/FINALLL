'use client';
import { useState } from 'react';
import { IoCartOutline, IoPersonOutline, IoHeart, IoSearch } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import BCA from '@/app/aset/bca.jpg';
import Mandiri from '@/app/aset/mandiri.webp';
import Visa from '@/app/aset/visa.webp';
import Indomaret from '@/app/aset/indomaret.png';
import Alfamart from '@/app/aset/alfamart (1).png';
import Gamepad from '@/app/aset/PlayStation 5  Wireless Controller.jpg';
import LCDMonitor from '@/app/aset/monitor.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tentang Grip.com */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Grip.com</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-600">Tentang Kami</a>
              </li>
              <li>
                <a href="/karir" className="hover:text-gray-600">Karir</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-600">Blog</a>
              </li>
              <li>
                <a href="/press" className="hover:text-gray-600">Press</a>
              </li>
            </ul>
          </div>

          {/* Promo & Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Promo & Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/promo" className="hover:text-gray-600">Promo</a>
              </li>
              <li>
                <a href="/layanan" className="hover:text-gray-600">Layanan</a>
              </li>
              <li>
                <a href="/syarat-ketentuan" className="hover:text-gray-600">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="/kebijakan-privasi" className="hover:text-gray-600">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>

          {/* Pusat Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pusat Bantuan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:text-gray-600">FAQ</a>
              </li>
              <li>
                <a href="/kontak" className="hover:text-gray-600">Kontak</a>
              </li>
              <li>
                <a href="/pengembalian" className="hover:text-gray-600">Pengembalian</a>
              </li>
              <li>
                <a href="/pengiriman" className="hover:text-gray-600">Pengiriman</a>
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
  );
};

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('COD');

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="font-bold text-lg">Grab & Ship</h1>
        <div className="flex items-center space-x-2 border px-3 py-2 rounded-md w-1/3">
          <IoSearch className="text-xl" />
          <input type="text" placeholder="Search..." className="w-full outline-none" />
        </div>
        <div className="flex space-x-4">
          <IoHeart className="text-xl" />
          <IoCartOutline className="text-xl" />
          <IoPersonOutline className="text-xl" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links (Placed Above "Detail Pesanan") */}
        <div className="md:col-span-3 mb-6">
          <nav className="flex space-x-6 text-sm font-semibold">
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/product" className="hover:text-blue-500">Product</a>
            <a href="/cart" className="hover:text-blue-500">View Cart</a>
            <a href="/checkout" className="hover:text-blue-500">Checkout</a>
          </nav>
        </div>

        {/* Form Checkout */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Detail Pesanan</h2>
          <input type="text" placeholder="Nama pemesan" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Alamat pengiriman" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Kode pos" className="w-full p-3 border rounded-md" />
          <input type="text" placeholder="Nomor handphone" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Pesan (opsional)" className="w-full p-3 border rounded-md"></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="save-info" className="w-4 h-4" />
            <label htmlFor="save-info" className="text-sm">Simpan informasi untuk checkout berikutnya</label>
          </div>
        </div>

        {/* Ringkasan Pesanan */}
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <div className="flex justify-between">
              <Image src={LCDMonitor} alt="LCD Monitor" width={50} height={50} />
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
            <div className="flex justify-between">
              <Image src={Gamepad} alt="H1 Gamepad" width={50} height={50} />
              <span>H1 Gamepad</span>
              <span>$1100</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$1750</span>
            </div>
          </div>
          
          {/* Metode Pembayaran */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Metode Pembayaran</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="Bank" onChange={() => setPaymentMethod('Bank')} />
                <span>Bank</span>
                <Image src={BCA} alt="BCA" width={50} height={30} />
                <Image src={Mandiri} alt="Mandiri" width={50} height={30} />
                <Image src={Visa} alt="Visa" width={50} height={30} />
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="Agen" onChange={() => setPaymentMethod('Agen')} />
                <span>Bayar Tunai di Mitra/Agen</span>
                <Image src={Indomaret} alt="Indomaret" width={50} height={30} />
                <Image src={Alfamart} alt="Alfamart" width={50} height={30} />
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={() => setPaymentMethod('COD')} />
                <span>COD</span>
              </label>
            </div>
          </div>

          {/* Kode Kupon */}
          <div className="flex space-x-2">
            <input type="text" placeholder="Kode Kupon" className="w-full p-3 border rounded-md" />
            <button className="bg-[#C2A58C] text-white px-4 py-2 rounded-md">Gunakan</button>
          </div>

          {/* Tombol Pesan */}
          <button className="w-full bg-[#C2A58C] text-white p-3 rounded-md">Pesan</button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
