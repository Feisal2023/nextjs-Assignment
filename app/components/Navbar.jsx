import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-500 py-4">
      <div className="container mx-auto max-w-screen-sm flex justify-between items-center">
        <Link href="/posts" className="text-white text-2xl font-bold">
          <span className="text-2xl font-semibold">Feisal</span>
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-white hover:text-green-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-white hover:text-green-200 transition duration-300"
          >
            Posts List
          </Link>
          <Link
            href="/create-post"
            className="text-white hover:text-green-200 transition duration-300"
          >
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
