import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">+234 916 147 2042</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">info@soccerfiesta.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Program Stages</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Register Now</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-yellow-300 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Soccer Fiesta: The First Eleven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

