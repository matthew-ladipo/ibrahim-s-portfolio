import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-800">Ibrahim</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-600">I</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Ibrahim</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional web experiences
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a dedicated developer with a passion for creating innovative web solutions. 
                I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">What I Do</h3>
              <ul className="space-y-2">
                <li>• Frontend Development</li>
                <li>• Responsive Web Design</li>
                <li>• UI/UX Design</li>
                <li>• Performance Optimization</li>
                <li>• Cross-browser Compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: '⚛️', level: 90 },
              { name: 'JavaScript', icon: '📜', level: 85 },
              { name: 'HTML/CSS', icon: '🎨', level: 95 },
              { name: 'Tailwind', icon: '💨', level: 88 },
              { name: 'Node.js', icon: '🟢', level: 75 },
              { name: 'Python', icon: '🐍', level: 70 },
              { name: 'Git', icon: '📦', level: 85 },
              { name: 'Figma', icon: '🎯', level: 80 }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React and Node.js',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: '🛒'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates',
                tech: ['React', 'Firebase', 'Tailwind'],
                image: '✅'
              },
              {
                title: 'Weather Dashboard',
                description: 'Real-time weather information with beautiful visualizations',
                tech: ['JavaScript', 'API', 'CSS'],
                image: '🌤️'
              },
              {
                title: 'Portfolio Website',
                description: 'Responsive portfolio built with modern web technologies',
                tech: ['React', 'Tailwind', 'Vite'],
                image: '💼'
              },
              {
                title: 'Chat Application',
                description: 'Real-time messaging app with user authentication',
                tech: ['Socket.io', 'React', 'Express'],
                image: '💬'
              },
              {
                title: 'Blog Platform',
                description: 'Content management system for blogging',
                tech: ['Next.js', 'Markdown', 'Vercel'],
                image: '📝'
              }
            ].map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Demo</button>
                  <button className="text-gray-600 hover:text-gray-800 font-medium">GitHub</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-blue-100 mb-12 text-lg">
            I'm always interested in new opportunities and exciting projects
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl mb-3">📧</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-100">ibrahim@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-2xl mb-3">📍</div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-blue-100">New York, NY</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Download Resume
            </a>
            <a href="mailto:ibrahim@example.com" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Ibrahim. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
