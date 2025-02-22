import React from 'react';
import { IoCartOutline, IoHeart, IoPersonOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white text-gray-800 h-full">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Toko Saya</h1>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Profile Toko
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Deskripsi Toko
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Toko Saya
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Produk Saya
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Tambah Produk Baru
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Navbar */}
          <nav className="bg-white p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold">Grab & Ship</h1>
              </div>
              <div className="flex items-center space-x-4">
                <IoHeart className="text-gray-600 hover:text-gray-800" />
                <IoCartOutline className="text-gray-600 hover:text-gray-800" />
                <IoPersonOutline className="text-gray-600 hover:text-gray-800" />
              </div>
            </div>
          </nav>

          {/* Content Area */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Informasi Toko Anda</h1>
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              {/* Logo Upload Section */}
              <div className="flex-shrink-0 w-1/3 flex flex-col items-center justify-center">
                <label className="w-32 h-32 border-2 border-gray-300 rounded-full flex items-center justify-center cursor-pointer mb-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                  <span className="text-gray-400">Upload Logo</span>
                </label>
                <span className="text-center text-gray-700">Logo Toko</span>
              </div>

              {/* Store Name and Description Section */}
              <div className="w-2/3 pl-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="namaToko">
                    Nama Toko
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="namaToko"
                    type="text"
                    placeholder="Nama Toko Anda"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="deskripsiToko">
                    Deskripsi Toko
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="deskripsiToko"
                    placeholder="Deskripsi Toko Anda"
                    rows={4}
                  ></textarea>
                </div>
                {/* Lihat Produk Button */}
                <div className="flex justify-end">
                  <button className="bg-[#C49B78] text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
                    Lihat Produk
                  </button>
                </div>
              </div>
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
        </main>
      </div>
    </>
  );
}

export default Dashboard;
