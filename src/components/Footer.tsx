import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-blue-900/90 backdrop-blur-md border-t border-blue-800/50 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <span className="text-sm">+234&nbsp;916&nbsp;147&nbsp;2042</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-sm">sccrfiesta@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Imo State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors p-2 bg-blue-800/50 rounded-lg hover:bg-blue-700/50"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors p-2 bg-blue-800/50 rounded-lg hover:bg-blue-700/50"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors p-2 bg-blue-800/50 rounded-lg hover:bg-blue-700/50"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-8 pt-8 text-center">
          <p className="text-sm text-blue-200">© 2024 Soccer Fiesta: The First Eleven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
