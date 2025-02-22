import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoPersonOutline, IoCartOutline,IoHeart } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Produk = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">Grab & Ship</h1>
        <div className="flex items-center space-x-4">
        <IoHeart size={24} />
          <IoCartOutline size={24} />
          <IoPersonOutline size={24} />
        </div>
      </header>

      <nav className="text-sm text-gray-500 mt-4 ml-4">
        Home / <span className="text-black font-semibold">Toko</span>
      </nav>

      <div className="flex mt-6">
        {/* Sidebar */}
        <aside className="w-1/4 p-4">
          <h2 className="font-bold text-lg">Toko Saya</h2>
          <ul className="mt-2 text-gray-500">
            <li>Profile Toko</li>
            <li>Deskripsi Toko</li>
          </ul>

          <h2 className="font-bold text-lg mt-6">Toko Saya</h2>
          <ul className="mt-2 text-gray-500">
            <li className="text-black">Produk Saya</li>
            <li>Tambah Produk Baru</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-3/4">
          <div className="flex justify-end mb-4">
            <button className="bg-[#C49B78] text-white px-4 py-2 rounded-md">
              Tambah Produk Baru
            </button>
          </div>
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3">Produk</th>
                  <th className="p-3">Harga</th>
                  <th className="p-3">Stok</th>
                  <th className="p-3">Kualitas Produk</th>
                  <th className="p-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((_, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">Gucci duffle bag</td>
                    <td className="p-3 text-[#C49B78]">$960</td>
                    <td className="p-3 text-center">12</td>
                    <td className="p-3 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#C49B78]" />
                      ))}
                      <span className="text-gray-500 ml-2">(65)</span>
                    </td>
                    <td className="p-3">
                      <button className="bg-[#C49B78] text-white px-3 py-1 rounded-md">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
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
};

export default Produk;
