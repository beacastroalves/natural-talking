
export default function Mentor() {
  const credentials = [
    { icon: 'ri-graduation-cap-line', title: 'Graduado em Gestão Financeira', desc: 'Formação sólida em comunicação corporativa' },
    { icon: 'ri-medal-line', title: 'Certificação Avançada UECE', desc: 'Nível C1 de inglês comprovado' },
    { icon: 'ri-time-line', title: '+4 Anos de Experiência', desc: 'Transformando alunos em falantes fluentes' }
  ];

  const experiences = [
    { icon: 'ri-earth-line', text: 'Viajou pelo Chile conversando com 10+ nacionalidades' },
    { icon: 'ri-translate-2', text: 'Tradutor simultâneo para empresas de máquinas pesadas' }
  ];

  return (
    <section id="mentor" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#1e88e5]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            SEU MENTOR
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
            Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Johnata Florencio</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="relative bg-gradient-to-br from-[#0c5a9e] to-[#1e88e5] rounded-3xl p-8 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                
                <div className="relative text-center">
                  <div className="w-full h-auto mx-auto mb-6 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                    <img 
                      src="public/img/johnata-chile.jpeg" 
                      alt="Johnata Florencio" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">Johnata Florencio</h3>
                  <p className="text-[#F97316] font-semibold mb-6">Mentor de Fluência</p>
                  
                  <div className="flex justify-center gap-3">
                    {['ri-graduation-cap-line', 'ri-earth-line', 'ri-medal-line'].map((icon, i) => (
                      <div key={i} className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                        <i className={`${icon} text-xl text-[#F97316]`}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#F97316] text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-[#F97316]/30">
                +100 alunos
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Credentials */}
            <div className="grid gap-4">
              {credentials.map((cred, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#1e88e5]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#F97316]/10 rounded-xl flex-shrink-0">
                    <i className={`${cred.icon} text-2xl text-[#F97316]`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{cred.title}</h4>
                    <p className="text-sm text-gray-600">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience highlight */}
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <i className="ri-global-line text-[#1e88e5]"></i>
                Experiência Internacional
              </h4>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#1e88e5]/10 rounded-lg flex-shrink-0">
                      <i className={`${exp.icon} text-lg text-[#1e88e5]`}></i>
                    </div>
                    <p className="text-gray-700 text-sm">{exp.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote - Full Width */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c5a9e] to-[#1e88e5] overflow-hidden mt-12">
          <div className="absolute top-4 left-6 md:left-12 text-6xl md:text-8xl text-[#F97316]/30 font-serif">"</div>
          <blockquote className="relative text-white text-lg md:text-2xl lg:text-3xl leading-relaxed italic text-center max-w-4xl mx-auto">
            Meu propósito não é te fazer passar em prova. É te dar <strong className="text-[#F97316] not-italic">LIBERDADE</strong> para se comunicar com qualquer pessoa, em qualquer lugar do mundo, sem medo e sem barreiras.
          </blockquote>
          <footer className="mt-6 text-[#F97316] font-semibold not-italic text-center text-lg">
            — Johnata Florencio
          </footer>
        </div>
      </div>
    </section>
  );
}
