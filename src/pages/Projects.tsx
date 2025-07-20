import { ExternalLink, Github, Home, Printer, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Net Zero Energy Building Design for Army Shelter (RISE-UP, IIT Jammu)",
      description: "Energy-efficient building simulation and load analysis for army shelters in extreme climates. This project involved optimizing heat gains, renewable integration, and envelope design to meet NZEB standards.",
      tags: ["Sustainable Infrastructure", "Energy Modeling", "Building Simulation", "RISE-UP Internship"],
      category: "Research",
      icon: <Home className="h-6 w-6" />,
      status: "Completed",
      duration: "2024",
      highlights: [
        "Selected for the RISE-UP internship at IIT Jammu",
        "Designed a Net Zero Energy Building (NZEB) model for high-altitude army shelters",
        "Conducted thermal load simulations including seasonal variation and sun tracking",
        "Integrated Trombe wall to reduce annual electric heating demand and cut CO₂ emissions by 114 kg",
        "Generated comparative performance graphs and tabular data using hourly climate inputs",
        "Applied mechanical engineering concepts to optimize envelope transmission loss and energy savings"
      ]
    },
    {
      id: 2,
      title: "3D Printing in Pandemic Response",
      description: "Research on digital manufacturing processes and functional 3D printing applications during the COVID-19 pandemic. Published in Springer's emerging frontiers series.",
      tags: ["3D Printing", "Digital Manufacturing", "Healthcare", "Innovation"],
      category: "Publication",
      icon: <Printer className="h-6 w-6" />,
      status: "Published",
      duration: "2022 - 2023",
      highlights: [
        "Published in Springer book chapter",
        "COVID-19 pandemic applications",
        "Functional 3D printing research",
        "Digital manufacturing processes"
      ]
    },
    {
      id: 3,
      title: "ONGC Drilling Equipment & Well Simulation",
      description: "Comprehensive study and simulation of drilling equipment and well operations during internship at ONGC facilities in Kolkata and Dehradun.",
      tags: ["Drilling", "Simulation", "Oil & Gas", "Equipment Design"],
      category: "Industrial",
      icon: <Wrench className="h-6 w-6" />,
      status: "Completed",
      duration: "2024",
      highlights: [
        "Hands-on experience with drilling equipment",
        "Well simulation and analysis",
        "Equipment performance optimization",
        "Industrial safety protocols"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Published':
        return 'bg-blue-100 text-blue-800'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Research':
        return 'bg-purple-100 text-purple-800'
      case 'Publication':
        return 'bg-indigo-100 text-indigo-800'
      case 'Industrial':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Engineering Projects</h1>
            <p className="text-lg text-gray-600">
              Innovative projects in thermal systems, refrigeration, and sustainable manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.category === 'Publication' && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                  )}
                  {project.category === 'Research' && (
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  )}
                  {project.category === 'Industrial' && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Project Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Projects</h3>
            <p className="text-gray-600">
              Research projects focusing on sustainable infrastructure, energy modeling, and building simulation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Printer className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Publications</h3>
            <p className="text-gray-600">
              Published research work in Springer and Wiley publications on advanced manufacturing.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Work</h3>
            <p className="text-gray-600">
              Practical projects and internship work with industry partners like ONGC.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new projects, research opportunities, and innovative engineering solutions.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              <ExternalLink className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
