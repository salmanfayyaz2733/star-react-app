import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-blue-500 mr-2" size={28} />
            <span className="text-xl font-bold text-white">SecurePro</span>
          </div>
          <p className="text-gray-400">
            Hum aapki security ke liye dedicated hain. Trust, safety aur
            reliability hamari pehchaan hai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <MapPin className="mr-2 text-blue-500" size={18} /> 123 Security
              Lane, Karachi, Pakistan
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 text-blue-500" size={18} />{" "}
              support@securepro.com
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-blue-500" size={18} /> +92 300 1234567
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SecurePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
