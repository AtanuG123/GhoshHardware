import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from "../image/Ghosh.png"
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo}className="h-8 w-9 text-blue-400" ></img>
              <span className="text-xl font-bold">Ghosh Hardware</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premier destination for fish farming equipment and aquaculture supplies. 
              Serving fish farmers with quality hardware since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Equipment Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/fishing-nets" className="text-gray-300 hover:text-white transition-colors">
                  Containers & Basins
                </Link>
              </li>
              <li>
                <Link to="/category/water-pumps" className="text-gray-300 hover:text-white transition-colors">
                  Suction Hose
                </Link>
              </li>
              <li>
                <Link to="/category/fish-medicine" className="text-gray-300 hover:text-white transition-colors">
                  Fishing Nets
                </Link>
              </li>
              <li>
                <Link to="/category/containers-basins" className="text-gray-300 hover:text-white transition-colors">
                  Footvalves
                </Link>
              </li>
              <li>
                <Link to="/category/pond-equipment" className="text-gray-300 hover:text-white transition-colors">
                  Salt
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Product queries
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Warranty Info
                </a>
              </li> */}
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  Rajendrapur , Near Naihati Blind School ,Naihati<br />
                  West Bengal 743166
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 9433237184</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">ghoshhardwareowner@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
              <p className="text-sm text-gray-300">
                Mon - Sat: 6:00 AM - 9:00 PM<br />
                Sunday: 7:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ghosh Hardware. All rights reserved. Developed by Atanu Ghosh
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;