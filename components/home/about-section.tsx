export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl p-1 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm a passionate full-stack engineer with over 6 years of experience building 
                scalable web applications and digital products. My journey in tech started with 
                a curiosity about how things work and evolved into a deep love for creating 
                solutions that impact people's lives.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud architecture, and user 
                experience design. I believe in writing clean, maintainable code and creating 
                applications that are not just functional, but delightful to use.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2">Experience</h4>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">6+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2">Projects Completed</h4>
                  <p className="text-2xl md:text-3xl font-bold text-emerald-600">50+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}