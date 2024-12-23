import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Media Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Investor Relations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Netflix, Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
