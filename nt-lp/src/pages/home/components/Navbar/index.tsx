
import { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleCTA = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="public/img/natural-talking-b.png" 
            alt="Natural Talking English"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Metodologia', id: 'metodologia' },
            { label: 'Mentor', id: 'mentor' },
            { label: 'Planos', id: 'planos' },
            { label: 'FAQ', id: 'faq' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-primary hover:bg-[#115E59]/10' 
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={handleCTA}
            className="ml-4 bg-[#F97316] text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-[#EA580C] transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-[#F97316]/25 hover:shadow-[#F97316]/40 hover:scale-105"
          >
            Aula Grátis
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
          <div className="p-4 space-y-2">
            {[
              { label: 'Metodologia', id: 'metodologia' },
              { label: 'Mentor', id: 'mentor' },
              { label: 'Planos', id: 'planos' },
              { label: 'FAQ', id: 'faq' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="w-full text-left px-4 py-3 rounded-xl text-primary font-medium hover:bg-[#115E59]/10 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={handleCTA}
              className="w-full bg-[#F97316] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#EA580C] transition-all cursor-pointer mt-4"
            >
              Agendar Aula Grátis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
