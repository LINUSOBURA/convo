import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-lime-600 text-white py-4 px-6 flex justify-between items-center">
      {/* College Name */}
      <a href="">
        <h1 className="text-xs md:text-2xl font-bold p-2">Atiam College</h1>
      </a>

      {/* Title */}
      <p className="text-xs md:text-xl">{title}</p>

      {/* Links Section */}
      <div className="relative">
        {/* Hamburger Icon - Small Screens */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Social Media Links for Larger Screens */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <a
            href="http://www.atiamcollege.co.ke"
            className="hover:underline text-white"
          >
            Visit our website
          </a>
          <a
            href="https://www.facebook.com/ATIAMCollege"
            target="_blank"
            className="hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/atiam_college/"
            target="_blank"
            className="hover:text-red-500"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@atiamcollege?lang=en"
            target="_blank"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://twitter.com/Atiam_College"
            target="_blank"
            className="hover:text-slate-950"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Dropdown Menu for Small Screens */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute right-0 top-12 bg-white text-black shadow-lg rounded-lg w-48 py-4 px-6 z-50 md:hidden`}
        >
          <a
            href="http://www.atiamcollege.co.ke"
            className="block mb-2 hover:underline"
          >
            Visit our website
          </a>
          <a
            href="https://www.facebook.com/ATIAMCollege"
            target="_blank"
            className="block mb-2 hover:text-blue-500"
            rel="noopener noreferrer"
          >
            <FaFacebook className="inline mr-2" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/atiam_college/"
            target="_blank"
            className="block mb-2 hover:text-red-500"
            rel="noopener noreferrer"
          >
            <FaInstagram className="inline mr-2" />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@atiamcollege?lang=en"
            target="_blank"
            className="block mb-2 hover:text-pink-500"
            rel="noopener noreferrer"
          >
            <FaTiktok className="inline mr-2" />
            TikTok
          </a>
          <a
            href="https://twitter.com/Atiam_College"
            target="_blank"
            className="block hover:text-slate-950"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="inline mr-2" />
            Twitter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
