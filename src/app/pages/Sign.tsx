import React from 'react'
import RandomGoofyAhhShit from '@/app/aset/shopping_cart_and_phone.jpg'
import GlugluLogo from '@/app/aset/google-removebg-preview.png'
import Image from 'next/image'
import Link from 'next/link'

function Sign() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col font-sans text-black">
        {/* Header */}
        <header className="bg-white shadow-sm p-6 fixed w-full z-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold tracking-tight text-black">Grab & Ship</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="bg-white max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-xl">
            {/* Left Section */}
            <div className="flex justify-center items-center">
              <div className="relative group">
                <Image
                  src={RandomGoofyAhhShit}
                  alt="Shopping Cart and Phone"
                  width={300}
                  height={300}
                  className="w-3/4 h-auto rounded-lg transform transition duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl font-semibold">Create an account</h2>
                <p className="mt-2 text-lg text-black">Enter your details below</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200 text-base text-black"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Email or Phone Number
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200 text-base text-black"
                    placeholder="Enter your email or phone number"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-black mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200 text-base text-black"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <Link href="/login" className="block w-full">
                  <button
                    type="button"
                    className="w-full bg-brown-500 hover:bg-brown-600 text-black py-3 rounded-lg transition duration-200 shadow-sm hover:shadow font-semibold text-base"
                  >
                    Create Account
                  </button>
                </Link>

                <button
                  type="button"
                  className="w-full bg-gray-100 border border-gray-300 text-black py-3 rounded-lg flex justify-center items-center gap-3 transition duration-200 hover:bg-gray-50 font-medium text-base"
                >
                  <Image
                    src={GlugluLogo}
                    alt="Google Icon"
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>
              </form>

              <p className="text-center text-base text-black">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline font-medium">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg tracking-tight text-black">Tentang Grib.com</h3>
              <ul className="space-y-2 text-base text-black">
                <li className="hover:text-gray-600 cursor-pointer">Visi & Misi</li>
                <li className="hover:text-gray-600 cursor-pointer">Karir</li>
                <li className="hover:text-gray-600 cursor-pointer">Blog</li>
                <li className="hover:text-gray-600 cursor-pointer">Sosial Logistik</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg tracking-tight text-black">Promo & Layanan</h3>
              <ul className="space-y-2 text-base text-black">
                <li className="hover:text-gray-600 cursor-pointer">Promo Terbaru</li>
                <li className="hover:text-gray-600 cursor-pointer">Layanan Pengiriman</li>
                <li className="hover:text-gray-600 cursor-pointer">Pengiriman Internasional</li>
                <li className="hover:text-gray-600 cursor-pointer">Cek Ongkir</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg tracking-tight text-black">Pusat Bantuan</h3>
              <ul className="space-y-2 text-base text-black">
                <li className="hover:text-gray-600 cursor-pointer">Bantuan Pelanggan</li>
                <li className="hover:text-gray-600 cursor-pointer">FAQ</li>
                <li className="hover:text-gray-600 cursor-pointer">Syarat dan Ketentuan</li>
                <li className="hover:text-gray-600 cursor-pointer">Kebijakan Privasi</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-100 py-4 text-center text-base text-black">
            <p>&copy; 2025 Grib.com. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Sign