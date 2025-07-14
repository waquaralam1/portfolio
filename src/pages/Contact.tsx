import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission - replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "gl4314@myamu.ac.in",
      href: "mailto:gl4314@myamu.ac.in"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Patna, Bihar, India",
      href: null
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "University",
      value: "Aligarh Muslim University",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/waquar-alam-gl4314",
      username: "waquar-alam-gl4314"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "#",
      username: "waquar-alam"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "ASHRAE",
      href: "#",
      username: "Social Media Coordinator"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Let's discuss research opportunities, collaborations, or engineering projects
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-gray-600">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 hover:bg-primary-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800 text-sm">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Connect with Me</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{social.label}</p>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {social.username}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Resume</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Download my resume to learn more about my experience, projects, and qualifications.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => window.open('/Waquar_Alam_Resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white border-t border-gray-200">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're interested in research collaboration, project partnerships, or just want to connect, 
              I'm always open to new opportunities and conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700"
                onClick={() => window.open('mailto:gl4314@myamu.ac.in', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/waquar-alam-gl4314', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
