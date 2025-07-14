import { MapPin, GraduationCap, Heart, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      </div>
      
      {/* Header */}
      <section className="glass-effect border-b border-gray-200/50 relative">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Passionate mechanical engineering student with a drive for innovation and research
            </p>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Personal Background</h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Hometown:</strong> Patna, Bihar, India - A city rich in history and culture, 
                  which has shaped my values and perspective on life.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <Heart className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Family Values:</strong> Raised in a family that emphasizes the importance of 
                  education, hard work, and giving back to the community. These values drive my 
                  commitment to research and academic excellence.
                </span>
              </p>
              <p className="flex items-start space-x-2">
                <Target className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Goals:</strong> To contribute to sustainable engineering solutions that can 
                  make a positive impact on society. I aim to pursue advanced research in thermal 
                  systems and eventually contribute to industry innovations.
                </span>
              </p>
            </div>
          </div>

          {/* Research Interests */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Research Interests</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Thermal Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced refrigeration systems, heat transfer optimization, and 
                    thermodynamic cycle analysis for improved energy efficiency.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sustainable manufacturing processes, cryogenic cooling techniques, 
                    and environmentally friendly engineering solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">3D Printing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Digital manufacturing processes, functional 3D printing applications, 
                    and innovative materials for additive manufacturing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* B.Tech */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <span className="text-sm text-gray-500">2022 - 2026</span>
                      <GraduationCap className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Bachelor of Technology
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      Mechanical Engineering
                    </p>
                    <p className="text-gray-600 text-sm">
                      Aligarh Muslim University, Aligarh
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Pre-final year student focusing on thermal systems, 
                      refrigeration, and sustainable engineering solutions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Diploma */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <GraduationCap className="h-5 w-5 text-primary-600" />
                      <span className="text-sm text-gray-500">2019 - 2022</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Diploma in Mechanical Engineering
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      Grade: 88.7% (2nd Rank)
                    </p>
                    <p className="text-gray-600 text-sm">
                      Government Polytechnic, Patna
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Achieved 2nd rank with exceptional academic performance, 
                      building strong foundation in mechanical engineering principles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Class X */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <span className="text-sm text-gray-500">2018 - 2019</span>
                      <GraduationCap className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Class X (Matriculation)
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      Science Stream
                    </p>
                    <p className="text-gray-600 text-sm">
                      Bihar School Examination Board
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Strong academic foundation with focus on mathematics and science, 
                      setting the stage for engineering career.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Qualities */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Qualities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
            <p className="text-gray-600">
              Focused on achieving research excellence and contributing to sustainable engineering solutions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Passionate</h3>
            <p className="text-gray-600">
              Deeply passionate about thermal systems, sustainability, and innovative engineering solutions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Learner</h3>
            <p className="text-gray-600">
              Committed to continuous learning and staying updated with latest developments in engineering.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
