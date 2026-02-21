
import { useState, useRef, useEffect } from 'react';
import { useScrollReveal, revealClass } from '../../../../hooks/useScrollReveal';

type Level = 'beginner' | 'intermediate' | 'advanced';

const certificateData: Record<
  Level,
  {
    title: string;
    subtitle: string;
    badge: string;
    image: string;
    description: string;
    features: string[];
    requirements: string[];
  }
> = {
  beginner: {
    title: 'Certificado Iniciante',
    subtitle: 'A1 – A2 | Foundations',
    badge: '🌱',
    image:
      'https://i.postimg.cc/Td73Z5CN/Beginners-Certificate-1.png',
    description:
      'Para quem está dando os primeiros passos no inglês e quer construir uma base sólida.',
    features: [
      'Compreensão de frases e expressões do dia a dia',
      'Capacidade de se apresentar e fazer perguntas simples',
      'Vocabulário essencial para viagens e situações cotidianas',
      'Leitura e escrita de textos básicos',
      'Pronúncia clara dos sons fundamentais do inglês',
      'Conversação guiada em contextos familiares',
    ],
    requirements: [
      'Cumprimento mínimo de 50 horas/aula no nível',
      'Prova objetiva de múltipla escolha',
      'Avaliação de interpretação de texto',
      'Domínio dos conteúdos de gramática básica',
    ],
  },
  intermediate: {
    title: 'Certificado Intermediário',
    subtitle: 'B1 – B2 | Fluency Builder',
    badge: '🚀',
    image:
      'https://i.postimg.cc/KGq8d3Jq/Beginners-Certificate-2.png',
    description:
      'Para quem já tem uma base e quer ganhar fluidez e confiança na comunicação.',
    features: [
      'Conversação fluídas sobre temas variados',
      'Compreensão de filmes, séries e podcasts em inglês',
      'Escrita de e-mails e textos profissionais',
      'Vocabulário amplo para negócios e viagens',
      'Participação ativa em reuniões e apresentações',
      'Gramática avançada aplicada naturalmente',
    ],
    requirements: [
      'Cumprimento mínimo de 70 horas/aula no nível',
      'Prova objetiva de múltipla escolha',
      'Domínio dos conteúdos de gramática avançada',
      'Avaliação de interpretação de texto',
      'Avaliação de escrita',
      'Prova oral (Speaking)',
      'Prova de escuta e interpretação (Listening)',
    ],
  },
  advanced: {
    title: 'Certificado Avançado',
    subtitle: 'C1 – C2 | Mastery',
    badge: '👑',
    image:
      'https://i.postimg.cc/kJ1gkRfh/Beginners-Certificate-3.png',
    description:
      'Para quem busca domínio completo do idioma e excelência na comunicação.',
    features: [
      'Fluência nativa em qualquer contexto social ou profissional',
      'Domínio de expressões idiomáticas e linguagem coloquial',
      'Escrita acadêmica e profissional de alto nível',
      'Preparação para certificações internacionais (TOEFL, IELTS)',
      'Negociação e liderança em inglês com confiança',
      'Compreensão de sotaques e variações regionais',
    ],
    requirements: [
      'Cumprimento mínimo de 90 horas/aula no nível',
      'Prova objetiva de múltipla escolha',
      'Domínio dos conteúdos de gramática avançada',
      'Avaliação de interpretação de texto',
      'Avaliação de escrita',
      'Prova oral (Speaking)',
      'Prova de escuta e interpretação (Listening)',
    ],
  },
};

const levels: { key: Level; label: string }[] = [
  { key: 'beginner', label: 'Iniciante' },
  { key: 'intermediate', label: 'Intermediário' },
  { key: 'advanced', label: 'Avançado' },
];

const levelColors: Record<Level, { bg: string; bgLight: string; text: string }> = {
  beginner: { bg: '#3ebcd1', bgLight: 'rgba(62, 188, 209, 0.08)', text: '#3ebcd1' },
  intermediate: { bg: '#5e17eb', bgLight: 'rgba(94, 23, 235, 0.08)', text: '#5e17eb' },
  advanced: { bg: '#ff3131', bgLight: 'rgba(255, 49, 49, 0.08)', text: '#ff3131' },
};

export default function Certificates() {
  const [activeLevel, setActiveLevel] = useState<Level>('beginner');
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardAnimating, setCardAnimating] = useState(false);

  const current = certificateData[activeLevel];
  const colors = levelColors[activeLevel];

  const highlightHours = (text: string, color: string) => {
    const match = text.match(/(\d+)\s*(horas\/aula)/);
    if (match) {
      const before = text.slice(0, match.index);
      const number = match[1];
      const unit = match[2];
      const after = text.slice((match.index || 0) + match[0].length);
      return (
        <>
          {before}
          <strong style={{ color }}>{number} {unit}</strong>
          {after}
        </>
      );
    }
    return text;
  };

  const header = useScrollReveal<HTMLDivElement>();
  const cardWrapper = useScrollReveal<HTMLDivElement>({ delay: 150 });
  const reqBlock = useScrollReveal<HTMLDivElement>({ delay: 250 });
  const infoBadges = useScrollReveal<HTMLDivElement>({ delay: 100 });

  // Animate card content on level change
  useEffect(() => {
    setCardAnimating(true);
    const t = setTimeout(() => setCardAnimating(false), 50);
    return () => clearTimeout(t);
  }, [activeLevel]);

  return (
    <section
      id="certificados"
      className="py-24 bg-[#FDFDFD] relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#E5F5FF_1px,transparent_1px),linear-gradient(to_bottom,#E5F5FF_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#38b6ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#70CFFF]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-12">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            CERTIFICAÇÃO
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] mb-6 leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '50ms' }}>
            Seu <span className="text-[#38b6ff]">Certificado de Fluência</span>
          </h2>
          <p className={`text-lg text-[#051218]/70 max-w-2xl mx-auto mb-8 ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '200ms' }}>
            Estes certificados celebram a jornada do aluno: cada aula, cada prática e cada conquista construíram o caminho até aqui. Ele simboliza crescimento, esforço e a confiança necessária para seguir explorando o inglês e novas possibilidades no futuro.
          </p>

          {/* Toggle triplo */}
          <div className={`inline-flex items-center p-1.5 rounded-2xl bg-[#E5F5FF] ${revealClass(header.isVisible, 'scale')}`} style={{ transitionDelay: '300ms' }}>
            {levels.map((level) => (
              <button
                key={level.key}
                onClick={() => setActiveLevel(level.key)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer text-wrap ${
                  activeLevel === level.key
                    ? 'bg-[#38b6ff] text-[#FDFDFD] shadow-lg'
                    : 'text-[#051218]/70 hover:text-[#38b6ff]'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Card */}
        <div ref={cardWrapper.ref} className={`max-w-5xl mx-auto ${revealClass(cardWrapper.isVisible, 'up')}`}>
          <div
            ref={cardRef}
            className={`relative rounded-3xl bg-[#FDFDFD] border border-[#E5F5FF] shadow-xl shadow-[#38b6ff]/5 overflow-hidden transition-all duration-500 ${cardAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagem */}
              <div
                className="relative w-full h-64 md:h-auto md:min-h-[420px] overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: `${colors.bg}10` }}
              >
                <div
                  className="absolute inset-0 opacity-20 transition-colors duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${colors.bg}40, transparent 70%)`,
                  }}
                ></div>
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-contain object-center relative z-10"
                />
                {/* Badge overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#051218]/80 backdrop-blur-sm text-[#FDFDFD] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap">
                    <span className="text-lg">{current.badge}</span>
                    {current.subtitle}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#051218] mb-3">
                  {current.title}
                </h3>
                <p className="text-[#051218]/60 text-sm mb-6 leading-relaxed">
                  {current.description}
                </p>

                <ul className="space-y-3.5 mb-8">
                  {current.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full mt-0.5 transition-colors duration-500"
                        style={{ backgroundColor: `${colors.bg}15` }}
                      >
                        <i className="ri-check-line text-sm" style={{ color: colors.text }}></i>
                      </div>
                      <span className="text-sm text-[#051218]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Requirements & Price Balloon */}
          <div
            ref={reqBlock.ref}
            className={`mt-6 rounded-3xl border p-8 md:p-10 transition-colors duration-500 ${revealClass(reqBlock.isVisible, 'up')}`}
            style={{
              backgroundColor: colors.bgLight,
              borderColor: `${colors.bg}20`,
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-xl transition-colors duration-500"
                style={{ backgroundColor: `${colors.bg}15` }}
              >
                <i className="ri-file-list-3-line text-lg" style={{ color: colors.text }}></i>
              </div>
              <h4 className="text-lg font-bold text-[#051218]">
                <a href="#certificados" className="hover:text-[#38b6ff] transition-colors">
                  Requisitos para Certificação
                </a>
              </h4>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full mt-0.5 transition-colors duration-500"
                    style={{ backgroundColor: `${colors.bg}15` }}
                  >
                    <i className="ri-checkbox-circle-line text-sm" style={{ color: colors.text }}></i>
                  </div>
                  <span className="text-sm text-[#051218]/75">
                    {highlightHours(req, colors.text)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info badges */}
        <div ref={infoBadges.ref} className={`flex flex-wrap items-center justify-center gap-6 text-sm text-[#051218]/60 mt-10 ${revealClass(infoBadges.isVisible, 'fade')}`}>
          <div className="flex items-center gap-2">
            <i className="ri-award-line text-[#38b6ff]"></i>
            <span>Certificado digital</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-verified-badge-line text-[#38b6ff]"></i>
            <span>Reconhecido pelo mercado</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-bar-chart-box-line text-[#38b6ff]"></i>
            <span>Avaliação contínua</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-global-line text-[#38b6ff]"></i>
            <span>Padrão internacional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
