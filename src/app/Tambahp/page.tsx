'use client';

import { IoCartOutline, IoPersonOutline, IoAddOutline, IoHeartOutline,IoHomeOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
export default function TambahProduk() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Grab & Ship</h1>
        <div className="flex items-center space-x-4">
        <Link href="/Home">
          <button>
           <IoHomeOutline className="text-gray-600 text-xl" />
           </button>
          </Link>
        <IoHeartOutline className="text-xl" />
          <IoCartOutline className="text-xl" />
          <IoPersonOutline className="text-xl" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Home / Toko</h3>
        <h2 className="text-xl font-semibold mb-4">Informasi Produk</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-700">Toko Saya</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
            <Link href="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Profile Toko
                </Link>
              <li>Deskripsi Toko</li>
              <h3 className="mt-4 font-semibold text-gray-700">Toko Saya</h3>
              <li>Produk Saya</li>
              <li className="text-gray-500">Tambah Produk Baru</li>
            </ul>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-700 mb-4">Deskripsi</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Nama Produk" className="w-full p-2 border rounded-md" />
              <textarea placeholder="Deskripsi Produk" className="w-full p-2 border rounded-md" />
              <select className="w-full p-2 border rounded-md">
                <option>Pilih Kategori</option>
              </select>
              <input type="text" placeholder="Size (Opsional)" className="w-full p-2 border rounded-md" />
            </div>

            <h3 className="font-semibold text-gray-700 mt-6 mb-2">Foto atau Video Produk</h3>
            <div className="flex space-x-2">
              <div className="w-20 h-20 flex items-center justify-center border rounded-md cursor-pointer bg-gray-200">
                <IoAddOutline className="text-gray-500 text-3xl" />
              </div>
              <div className="w-20 h-20 border rounded-md bg-gray-100"></div>
              <div className="w-20 h-20 border rounded-md bg-gray-100"></div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              * Foto atau video produk promosi akan tampil di halaman promosi, hasil pencarian, dan rekomendasi.
            </p>

            <input type="text" placeholder="Harga" className="w-full p-2 border rounded-md mt-4" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <Link href="/Profile">
          <button className="px-4 py-2 bg-gray-300 rounded-md">Kembali</button>
          </Link>
          <button className="px-4 py-2 bg-[#C49B78] text-white rounded-md">Simpan Produk</button>
        </div>
      </div>

      {/* Footer */}
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
}
