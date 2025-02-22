import React from 'react';
import Image from 'next/image';
import RandomGoofyAhhShit from '@/app/aset/shopping_cart_and_phone.jpg';
import Link from 'next/link';

function Login() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-6 fixed w-full z-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl font-bold text-black">Grab & Ship</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center pt-20">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 text-black">Login</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email or Username
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200"
                    placeholder="Enter your email or username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-200"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Link href="/Home" className="block w-full mt-6">
                  <button
                    type="submit"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg transition duration-200 shadow-sm hover:shadow"
                  >
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-4 mt-auto">
          <p className="text-sm text-gray-600">
            © 2025 Grab & Ship. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Login;