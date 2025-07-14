import { BookOpen, ExternalLink, Calendar, Users, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Enhancing Sustainability in Machining Using Cryogenic Cooling",
      type: "Book Chapter",
      publisher: "Wiley",
      book: "Smart & Sustainable Manufacturing",
      year: "2023",
      authors: ["Waquar Alam", "Co-authors"],
      abstract: "This chapter explores the implementation of cryogenic cooling techniques in machining processes to enhance sustainability and reduce environmental impact. The research presents comprehensive analysis of cooling strategies and their effectiveness in various manufacturing applications.",
      keywords: ["Cryogenic Cooling", "Sustainable Manufacturing", "Machining", "Environmental Impact"],
      doi: "10.1002/example.doi",
      status: "Published",
      impact: "High Impact Research",
      category: "Sustainability"
    },
    {
      id: 2,
      title: "The Emerging Frontiers in Materials for Functional 3D Printing",
      type: "Book Chapter",
      publisher: "Springer",
      book: "Digital Manufacturing: Processes & Applications",
      year: "2023",
      authors: ["Waquar Alam", "Research Team"],
      abstract: "This work investigates the emerging frontiers in materials science for functional 3D printing applications, particularly focusing on pandemic response and healthcare applications. The research covers advanced manufacturing processes and material innovations.",
      keywords: ["3D Printing", "Digital Manufacturing", "Materials Science", "Healthcare Applications"],
      doi: "10.1007/example.doi",
      status: "Published",
      impact: "Innovative Research",
      category: "Manufacturing"
    }
  ]

  const researchProjects = [
    {
      id: 1,
      title: "ASHRAE-funded Undergraduate Research Project",
      description: "Multi-evaporator refrigeration system research focusing on energy efficiency and advanced cooling technologies.",
      funding: "ASHRAE Foundation",
      duration: "2023-2024",
      status: "Completed",
      outcomes: [
        "Developed innovative multi-evaporator design",
        "Achieved 25% improvement in cooling efficiency",
        "Comprehensive system analysis and optimization",
        "Potential for commercial application"
      ]
    },
    {
      id: 2,
      title: "Thermal Systems Optimization Research",
      description: "Advanced research on thermal system performance optimization using computational fluid dynamics and experimental validation.",
      funding: "University Grant",
      duration: "2023-Present",
      status: "Ongoing",
      outcomes: [
        "CFD modeling of thermal systems",
        "Experimental validation protocols",
        "Performance optimization strategies",
        "Energy efficiency improvements"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800'
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sustainability':
        return 'bg-green-100 text-green-800'
      case 'Manufacturing':
        return 'bg-purple-100 text-purple-800'
      case 'Thermal Systems':
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h1>
            <p className="text-lg text-gray-600">
              Published research work and ongoing projects in thermal systems and sustainable manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Published Work</h2>
        <div className="space-y-8">
          {publications.map((pub) => (
            <Card key={pub.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pub.title}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        {pub.type} • {pub.publisher} • {pub.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(pub.status)}`}>
                      {pub.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(pub.category)}`}>
                      {pub.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Book:</h4>
                    <p className="text-gray-600">{pub.book}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Authors:</h4>
                    <p className="text-gray-600">{pub.authors.join(', ')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Abstract:</h4>
                    <p className="text-gray-600 text-sm">{pub.abstract}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Keywords:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-4">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>Published {pub.year}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{project.duration}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Funding:</h4>
                    <p className="text-gray-600">{project.funding}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Manufacturing</h3>
            <p className="text-gray-600">
              Research on environmentally friendly manufacturing processes and cryogenic cooling techniques.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Manufacturing</h3>
            <p className="text-gray-600">
              Advanced 3D printing technologies and digital manufacturing processes for innovative applications.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Systems</h3>
            <p className="text-gray-600">
              Refrigeration systems, heat transfer optimization, and energy efficiency improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Research Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2+</div>
                <div className="text-gray-600">Published Book Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
                <div className="text-gray-600">ASHRAE Grant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3+</div>
                <div className="text-gray-600">Research Areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications
