import { Award, Trophy, GraduationCap, Target, DollarSign, Globe, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "AEEF Mini Scholarship",
      category: "Scholarship",
      year: "2024",
      description: "Received the AEEF (Alumni Endowment Education Foundation) Mini Scholarship for academic excellence and research contributions in mechanical engineering.",
      impact: "Financial support for continuing education and research activities",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 2,
      title: "2nd Rank in Diploma",
      category: "Academic Excellence",
      year: "2022",
      description: "Achieved 2nd rank in Diploma in Mechanical Engineering with an outstanding grade of 88.7% at Government Polytechnic, Patna.",
      impact: "Recognition for exceptional academic performance and dedication to studies",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 3,
      title: "ASHRAE Travel Grant Application",
      category: "Research Grant",
      year: "2024",
      description: "Applied for ASHRAE Travel Grant to support participation in international conferences and research collaboration opportunities.",
      impact: "Potential support for international research collaboration and knowledge exchange",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    }
  ]

  const internshipApplications = [
    {
      id: 1,
      organization: "CERN",
      program: "Summer Student Programme",
      location: "Geneva, Switzerland",
      field: "Particle Physics & Engineering",
      status: "Applied",
      description: "Applied for prestigious internship program at CERN focusing on particle physics research and engineering applications."
    },
    {
      id: 2,
      organization: "Kyoto University",
      program: "Research Internship",
      location: "Kyoto, Japan",
      field: "Advanced Materials & Manufacturing",
      status: "Applied",
      description: "Sought research opportunities in advanced materials and manufacturing technologies at leading Japanese institution."
    },
    {
      id: 3,
      organization: "ITRI",
      program: "International Internship",
      location: "Taiwan",
      field: "Industrial Technology Research",
      status: "Applied",
      description: "Applied for international internship program focusing on industrial technology research and development."
    },
    {
      id: 4,
      organization: "ISRO",
      program: "Student Internship",
      location: "India",
      field: "Space Technology & Engineering",
      status: "Applied",
      description: "Applied for internship program at Indian Space Research Organisation to work on space technology projects."
    },
    {
      id: 5,
      organization: "IIT Palakkad",
      program: "Research Internship",
      location: "Kerala, India",
      field: "Mechanical Engineering Research",
      status: "Applied",
      description: "Applied for research internship in mechanical engineering focusing on thermal systems and sustainable technologies."
    }
  ]

  const recognitions = [
    {
      title: "Research Excellence",
      description: "Published research work in Springer and Wiley publications",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Leadership Recognition",
      description: "ASHRAE AMU Social Media Coordinator and Swimming Captain",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Academic Merit",
      description: "Consistent academic excellence throughout educational journey",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "Professional Development",
      description: "Harvard Aspire Leadership Program and Mahindra Pride Training",
      icon: <Trophy className="h-5 w-5" />
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800'
      case 'Accepted':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h1>
            <p className="text-lg text-gray-600">
              Academic excellence, scholarships, and professional recognition
            </p>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Major Achievements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.year}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
                <p className="text-sm text-gray-500">{achievement.category}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                    <p className="text-gray-600 text-sm">{achievement.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Internship Applications */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Internship Applications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internshipApplications.map((application) => (
            <Card key={application.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{application.organization}</CardTitle>
                    <p className="text-lg text-gray-700 font-medium">{application.program}</p>
                    <p className="text-sm text-gray-500 mt-1">{application.location}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Field:</h4>
                    <p className="text-gray-600 text-sm">{application.field}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Description:</h4>
                    <p className="text-gray-600 text-sm">{application.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recognition Areas */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Areas of Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recognitions.map((recognition, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    {recognition.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{recognition.title}</h3>
                    <p className="text-gray-600 text-sm">{recognition.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Achievement Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">88.7%</div>
              <div className="text-gray-600">Diploma Grade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2nd</div>
              <div className="text-gray-600">Rank in Diploma</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <div className="text-gray-600">Scholarship Received</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
              <div className="text-gray-600">Internship Applications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Future Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Research</h3>
                  <p className="text-gray-600">
                    Pursue advanced research in thermal systems and sustainable engineering solutions
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Contribute to international research collaborations and industry innovations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements
