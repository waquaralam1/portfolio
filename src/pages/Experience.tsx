import { Briefcase, MapPin, Calendar, Award, Users, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "ONGC Intern",
      company: "Oil and Natural Gas Corporation",
      location: "Kolkata & Dehradun",
      duration: "2024",
      type: "Internship",
      description: "Gained hands-on experience with drilling equipment and well simulation at ONGC facilities. Worked on equipment analysis, performance optimization, and safety protocols in the oil and gas industry.",
      responsibilities: [
        "Analyzed drilling equipment performance and efficiency",
        "Participated in well simulation and modeling projects",
        "Studied safety protocols and environmental compliance",
        "Collaborated with engineering teams on equipment optimization",
        "Gained exposure to oil and gas industry operations"
      ],
      skills: ["Drilling Equipment", "Well Simulation", "Safety Protocols", "Equipment Analysis", "Industrial Operations"],
      achievements: [
        "Completed comprehensive training program",
        "Contributed to equipment performance analysis",
        "Developed understanding of oil and gas operations"
      ]
    },
    {
      id: 2,
      title: "RISE Intern",
      company: "IIT Jammu",
      location: "Jammu, India",
      duration: "2023",
      type: "Research Internship",
      description: "Participated in the Research Internship in Science and Engineering (RISE) program at IIT Jammu. Worked on advanced research projects in mechanical engineering with focus on thermal systems and sustainable technologies.",
      responsibilities: [
        "Conducted research on thermal systems optimization",
        "Assisted in experimental setup and data collection",
        "Analyzed research data and prepared technical reports",
        "Collaborated with PhD students and faculty members",
        "Participated in research seminars and presentations"
      ],
      skills: ["Research Methodology", "Thermal Systems", "Data Analysis", "Technical Writing", "Experimental Design"],
      achievements: [
        "Successfully completed RISE program",
        "Contributed to ongoing research projects",
        "Developed research and analytical skills"
      ]
    },
    {
      id: 3,
      title: "Social Media Coordinator",
      company: "ASHRAE AMU Student Chapter",
      location: "Aligarh Muslim University",
      duration: "2023 - Present",
      type: "Leadership Role",
      description: "Leading social media initiatives for the ASHRAE AMU Student Chapter, promoting engineering events, research activities, and student engagement in HVAC&R industry.",
      responsibilities: [
        "Manage social media platforms and content strategy",
        "Coordinate with chapter members and faculty advisors",
        "Organize and promote engineering events and workshops",
        "Create engaging content about HVAC&R industry",
        "Facilitate student networking and professional development"
      ],
      skills: ["Social Media Management", "Content Creation", "Event Coordination", "Leadership", "Professional Networking"],
      achievements: [
        "Increased chapter social media engagement by 200%",
        "Successfully organized multiple technical events",
        "Enhanced chapter visibility and student participation"
      ]
    },
    {
      id: 4,
      title: "Aspire Leadership Program Participant",
      company: "Harvard University",
      location: "Online",
      duration: "2023",
      type: "Leadership Development",
      description: "Participated in Harvard's Aspire Leadership Program, developing leadership skills, strategic thinking, and global perspectives on engineering challenges.",
      responsibilities: [
        "Participated in leadership workshops and seminars",
        "Engaged in case study analysis and group discussions",
        "Developed strategic thinking and problem-solving skills",
        "Networked with international participants",
        "Completed leadership assessment and development plan"
      ],
      skills: ["Leadership", "Strategic Thinking", "Global Perspective", "Team Management", "Communication"],
      achievements: [
        "Successfully completed Harvard Aspire program",
        "Developed comprehensive leadership framework",
        "Built international professional network"
      ]
    },
    {
      id: 5,
      title: "Swimming Captain",
      company: "Aligarh Muslim University",
      location: "Aligarh, India",
      duration: "2022 - 2023",
      type: "Sports Leadership",
      description: "Led the university swimming team as captain, organizing training sessions, competitions, and promoting sports culture among students.",
      responsibilities: [
        "Led training sessions and team coordination",
        "Organized swimming competitions and events",
        "Mentored junior swimmers and new team members",
        "Coordinated with sports department and coaches",
        "Promoted sports culture and healthy lifestyle"
      ],
      skills: ["Team Leadership", "Sports Management", "Mentoring", "Event Organization", "Physical Fitness"],
      achievements: [
        "Successfully led university swimming team",
        "Organized inter-college swimming competitions",
        "Promoted sports participation among students"
      ]
    },
    {
      id: 6,
      title: "Mahindra Pride Training",
      company: "Mahindra Group",
      location: "India",
      duration: "2023",
      type: "Professional Training",
      description: "Completed Mahindra Pride Training program focusing on professional development, industry skills, and career advancement in the automotive and engineering sector.",
      responsibilities: [
        "Participated in professional development workshops",
        "Learned industry best practices and standards",
        "Developed technical and soft skills",
        "Engaged in team-building activities",
        "Completed assessment and certification"
      ],
      skills: ["Professional Development", "Industry Knowledge", "Technical Skills", "Team Collaboration", "Quality Standards"],
      achievements: [
        "Successfully completed Mahindra Pride Training",
        "Gained industry insights and best practices",
        "Developed professional network in automotive sector"
      ]
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-800'
      case 'Research Internship':
        return 'bg-purple-100 text-purple-800'
      case 'Leadership Role':
        return 'bg-green-100 text-green-800'
      case 'Leadership Development':
        return 'bg-orange-100 text-orange-800'
      case 'Sports Leadership':
        return 'bg-red-100 text-red-800'
      case 'Professional Training':
        return 'bg-indigo-100 text-indigo-800'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
            <p className="text-lg text-gray-600">
              Diverse experience across research, industry, leadership, and professional development
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-gray-600">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Experience Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">6+</div>
              <div className="text-gray-600">Professional Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-gray-600">Research Internships</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
