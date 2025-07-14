import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-600" />
                <a 
                  href="mailto:gl4314@myamu.ac.in" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  gl4314@myamu.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-600" />
                <span className="text-gray-600">Patna, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="/Waquar_Alam_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-primary-600 transition-colors"
              >
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="block text-gray-600 hover:text-primary-600 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="#research" 
                className="block text-gray-600 hover:text-primary-600 transition-colors"
              >
                Research Work
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/waquar-alam-gl4314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Waquar Alam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
