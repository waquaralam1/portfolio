import { Link } from 'react-router-dom'
import { Download, ExternalLink, Github, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
      </div>
      
      {/* Hero Section */}
      <section className="container py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Available for Research Opportunities
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent animate-gradient-x">
                  Waquar Alam
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl text-gray-700 font-semibold">
                  Mechanical Engineering Student
                </p>
                <p className="text-lg lg:text-xl text-gray-600 flex items-center space-x-2">
                  <span>Research Enthusiast</span>
                  <span className="text-primary-400">•</span>
                  <span>ASHRAE Coordinator</span>
                  <span className="text-primary-400">•</span>
                  <span>Innovation Advocate</span>
                </p>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Pre-final year student at <span className="font-semibold text-primary-700">Aligarh Muslim University</span>, 
                passionate about thermal systems, sustainability, and innovative engineering solutions. 
                Currently working on cutting-edge research in refrigeration and 3D printing technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-8">
              <a 
                href="https://linkedin.com/in/waquar-alam-gl4314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-100 transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href="mailto:gl4314@myamu.ac.in"
                className="group flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-all duration-200"
              >
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-100 transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-left">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 p-1.5 shadow-2xl shadow-primary-500/20">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-8xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">WA</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-80 animate-float shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-70 animate-float shadow-lg" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-60 animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 blur-2xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-soft animate-scale-up">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-primary-600">📚</span>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">2+</div>
            <div className="text-gray-600 font-medium">Research Publications</div>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-soft animate-scale-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-accent-600">🔧</span>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-gray-600 font-medium">Engineering Projects</div>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-soft animate-scale-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-blue-600">💼</span>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">3</div>
            <div className="text-gray-600 font-medium">Internships</div>
          </div>
          
          <div className="group text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-soft animate-scale-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-green-600">🎓</span>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">88.7%</div>
            <div className="text-gray-600 font-medium">Diploma Grade</div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my latest research, projects, and professional experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Research Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 hover:shadow-large transition-all duration-300 transform hover:scale-[1.02] animate-slide-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  📊
                </div>
                <span className="ml-3 text-sm text-blue-700 font-semibold px-3 py-1 bg-blue-100 rounded-full">Research</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cryogenic Cooling Strategies
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Published in Wiley book chapter on sustainable machining using cryogenic cooling techniques.
              </p>
              <Button variant="outline" size="sm" asChild className="group-hover:bg-blue-50 group-hover:border-blue-300">
                <Link to="/research">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-100 p-8 hover:shadow-large transition-all duration-300 transform hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                  🔬
                </div>
                <span className="ml-3 text-sm text-emerald-700 font-semibold px-3 py-1 bg-emerald-100 rounded-full">Project</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Multi-Evaporator Refrigeration
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ASHRAE-funded research project on advanced refrigeration systems for improved efficiency.
              </p>
              <Button variant="outline" size="sm" asChild className="group-hover:bg-emerald-50 group-hover:border-emerald-300">
                <Link to="/projects">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Experience Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 p-8 hover:shadow-large transition-all duration-300 transform hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                  💼
                </div>
                <span className="ml-3 text-sm text-purple-700 font-semibold px-3 py-1 bg-purple-100 rounded-full">Experience</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ONGC Internship
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hands-on experience with drilling equipment and well simulation at ONGC facilities.
              </p>
              <Button variant="outline" size="sm" asChild className="group-hover:bg-purple-50 group-hover:border-purple-300">
                <Link to="/experience">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
