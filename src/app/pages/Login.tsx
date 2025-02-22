import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import RandomGoofyAhhShit from '@/app/aset/shopping_cart_and_phone.jpg';
import Link from 'next/link';
function login() {
  return (
    <>
      <div className="min-h-screen bg-white-100 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl font-bold">Grab & Ship</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="flex justify-center items-center">
              <Image
                src={RandomGoofyAhhShit} // Path gambar Anda
                alt="Shopping Cart and Phone"
                width={300}
                height={300}
                className="w-3/4 h-auto"
              />
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Login</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email or Username
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email or username"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Link href="/dashboard">
                  <button
                    type="submit"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-lg"
                  >
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-4">
          <p className="text-sm text-gray-600">
            © 2025 Grab & Ship. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default login;