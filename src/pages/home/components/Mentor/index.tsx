
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function Mentor() {
  const credentials = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'Graduado em Gestão Financeira',
      desc: 'Formação sólida em comunicação corporativa',
    },
    {
      icon: 'ri-medal-line',
      title: 'Certificação Avançada UECE',
      desc: 'Nível C1 comprovado',
    },
    {
      icon: 'ri-time-line',
      title: '+4 Anos de Experiência',
      desc: 'Transformando alunos em falantes fluentes',
    },
  ];

  const experiences = [
    {
      icon: 'ri-earth-line',
      text: 'Viajou pelo Chile conversando com 10+ nacionalidades',
    },
    {
      icon: 'ri-translate-2',
      text: 'Tradutor simultâneo para empresas de máquinas pesadas',
    },
  ];

  const header = useScrollReveal<HTMLDivElement>();
  const profileCard = useScrollReveal<HTMLDivElement>({ delay: 100 });
  const credItems = useStaggerReveal(credentials.length, 200, 120);
  const expCard = useScrollReveal<HTMLDivElement>({ delay: 400 });
  const quoteBlock = useScrollReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section id="mentor" className="py-24 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#38b6ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#70CFFF]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            SEU MENTOR
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '50ms' }}>
            Conheça{' '}
            <span className="text-[#38b6ff]">
              Johnata Florencio
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Profile Card */}
          <div ref={profileCard.ref} className={`lg:col-span-2 ${revealClass(profileCard.isVisible, 'right')}`}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#38b6ff] to-[#2A8FCC] rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#70CFFF]/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FDFDFD]/10 rounded-full blur-xl"></div>

                <div className="relative text-center">
                  <div className="w-full h-auto mx-auto mb-6 rounded-3xl overflow-hidden bg-[#FDFDFD]/10 backdrop-blur-sm border border-[#FDFDFD]/20">
                    <img
                      src="public/img/johnata-chile.jpeg"
                      alt="Johnata Florencio"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#FDFDFD] mb-1">Johnata Florencio</h3>
                  <p className="text-[#CCF0FF] font-semibold mb-6">Mentor de Fluência em Inglês</p>

                  <div className="flex justify-center gap-3">
                    {['ri-graduation-cap-line', 'ri-earth-line', 'ri-medal-line'].map((icon, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center bg-[#FDFDFD]/10 backdrop-blur-sm rounded-xl border border-[#FDFDFD]/10"
                      >
                        <i className={`${icon} text-xl text-[#FDFDFD]`}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#051218] text-[#FDFDFD] px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-[#051218]/30">
                +100 alunos
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Credentials */}
            <div ref={credItems.containerRef} className="grid gap-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-[#FDFDFD] border border-[#E5F5FF] hover:border-[#38b6ff]/30 hover:shadow-lg transition-all ${staggerItemClass(credItems.visibleItems[index], 'left')}`}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#38b6ff]/10 rounded-xl flex-shrink-0">
                    <i className={`${cred.icon} text-2xl text-[#38b6ff]`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#051218]">{cred.title}</h4>
                    <p className="text-sm text-[#051218]/70">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience highlight */}
            <div ref={expCard.ref} className={`p-6 rounded-2xl bg-[#FDFDFD] border border-[#E5F5FF] shadow-sm ${revealClass(expCard.isVisible, 'left')}`}>
              <h4 className="font-bold text-[#051218] mb-4 flex items-center gap-2">
                <i className="ri-global-line text-[#38b6ff]"></i>
                Experiência Internacional
              </h4>
              <div className="space-y-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#38b6ff]/10 rounded-lg flex-shrink-0">
                      <i className={`${exp.icon} text-lg text-[#38b6ff]`}></i>
                    </div>
                    <p className="text-[#051218]/80 text-sm">{exp.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote - Full Width */}
        <div ref={quoteBlock.ref} className={`relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#38b6ff] to-[#2A8FCC] overflow-hidden mt-12 ${revealClass(quoteBlock.isVisible, 'scale')}`}>
          <div className="absolute top-4 left-6 md:left-12 text-6xl md:text-8xl text-[#FDFDFD]/20 font-serif">
            &quot;
          </div>
          <blockquote className="relative text-[#FDFDFD] text-lg md:text-2xl lg:text-3xl leading-relaxed italic text-center max-w-4xl mx-auto">
            Meu propósito não é te fazer passar em prova. É te ensinar com leveza e te dar {' '}
            <strong className="text-[#051218] not-italic px-1">LIBERDADE</strong> para se comunicar
            com qualquer pessoa, em qualquer lugar do mundo de forma natural, sem medo e sem barreiras.
          </blockquote>
          <footer className="mt-6 text-[#051218] font-semibold not-italic text-center text-lg">
            — Johnata Florencio
          </footer>
        </div>
      </div>
    </section>
  );
}
