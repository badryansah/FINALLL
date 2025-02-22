import { IoCartOutline, IoPersonOutline, IoHeart } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Grab & Ship</h1>
          <div className="flex space-x-4">
            <IoHeart className="text-gray-600 hover:text-gray-800" size={24} />
            <IoCartOutline className="text-gray-600 hover:text-gray-800" size={24} />
            <IoPersonOutline className="text-gray-600 hover:text-gray-800" size={24} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white text-gray-800">
          <nav className="p-4">
            <ul className="space-y-4">
              <li className="font-bold">Akun Saya</li>
              <li>
                <Link href="/account/profile" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/account/change-password" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Ganti Password
                </Link>
              </li>
              <li>
                <Link href="/account/privacy-settings" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Pengaturan privasi
                </Link>
              </li>
              <li className="mt-4 font-bold">Pesanan Saya</li>
              <li>
                <Link href="/orders/cart" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Keranjang
                </Link>
              </li>
              <li>
                <Link href="/orders/favorites" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Favorit Saya
                </Link>
              </li>
              <li className="mt-4 font-bold">Toko Saya</li>
              <li>
                <Link href="/store/products" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Produk Saya
                </Link>
              </li>
              <li>
                <Link href="/store/add-product" className="block px-4 py-2 hover:bg-gray-100 rounded">
                  Tambah Produk Baru
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Profil Saya</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                    Ganti Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                    Password Baru
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Konfirmasi Password Baru
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-[#C2A58C] px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Simpan perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default Profile;
